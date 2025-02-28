'use client';
import { useEffect, useRef } from 'react';

export default function BinaryAnimation({ children }) {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        // Check if window is available (client-side only)
        if (typeof window === 'undefined') return;
        
        // Safe check for canvas reference
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        let binaryParticles = [];
        const binaryChars = ['0', '1'];
        
        // Center spawn point
        const center = { x: canvas.width * 0.5, y: canvas.height * 0.5 };
        
        // Calculate max distance to edge for normalization
        const maxDistance = Math.max(
            center.x,
            center.y,
            canvas.width - center.x,
            canvas.height - center.y
        );
        
        class Particle {
            constructor(x, y, size, speed, angle) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.speed = speed;
                this.angle = angle;
                this.alpha = 1;
                this.char = binaryChars[Math.floor(Math.random() * binaryChars.length)];
                
                // Calculate target at edge of screen based on angle
                const edgeX = Math.cos(angle) > 0 ? canvas.width : 0;
                const edgeY = Math.sin(angle) > 0 ? canvas.height : 0;
                
                // Determine trajectory to edge
                this.targetX = edgeX;
                this.targetY = edgeY;
                
                // Calculate distance to edge for lifespan
                const distToEdge = Math.sqrt(
                    Math.pow(this.targetX - x, 2) + 
                    Math.pow(this.targetY - y, 2)
                );
                
                // Normalize lifespan based on distance
                this.lifespan = distToEdge / speed;
                this.age = 0;
            }
            
            update() {
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                this.age++;
                
                // Calculate fade based on progress to edge
                const progress = this.age / this.lifespan;
                this.alpha = Math.max(0, 1 - progress);
                
                // Update size based on distance from center
                const distFromCenter = Math.sqrt(
                    Math.pow(this.x - center.x, 2) + 
                    Math.pow(this.y - center.y, 2)
                );
                
                // Size adjusts as particle moves outward
                this.displaySize = this.size * (1 - distFromCenter / maxDistance * 0.5);
            }
            
            draw() {
                ctx.fillStyle = `hsla(45, 87%, 59%, ${this.alpha})`;
                ctx.font = `${this.displaySize}px monospace`;
                ctx.fillText(this.char, this.x, this.y);
            }
        }
        
        function createParticles() {
            // Create particles from center point in multiple streams
            for (let i = 0; i < 5; i++) {
                let size = Math.random() * 20 + 10;
                let speed = Math.random() * 2 + 2;
                // Random angle in all directions from center
                let angle = Math.random() * Math.PI * 2;
                binaryParticles.push(new Particle(center.x, center.y, size, speed, angle));
            }
        }
        
        const particleInterval = setInterval(createParticles, 50);
        let animationFrame;
        
        function animate() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            binaryParticles.forEach((particle, index) => {
                particle.update();
                particle.draw();
                
                // Remove particles that have faded out
                if (particle.alpha <= 0.1 || 
                    particle.x < 0 || particle.x > canvas.width ||
                    particle.y < 0 || particle.y > canvas.height) {
                    binaryParticles.splice(index, 1);
                }
            });
            animationFrame = requestAnimationFrame(animate);
        }
        
        animate();
        
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Update center point on resize
            center.x = canvas.width * 0.5;
            center.y = canvas.height * 0.5;
        };
        window.addEventListener('resize', handleResize);
        
        // Handle cleanup properly
        return () => {
            clearInterval(particleInterval);
            cancelAnimationFrame(animationFrame);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <div style={{ position: 'relative' }}>
            <canvas 
                ref={canvasRef} 
                style={{ 
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    background: 'black' 
                }} 
            />
            {children}
        </div>
    );
}