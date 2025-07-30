import { useRef, useEffect } from "react";
import "./matrix.css";

export default function MatrixSection() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const letters = "01ABCDEFGHIJKLMNOPQRSTUVXYZ".split("");
        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array.from({ length: columns }).fill(1);

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#2722aaff";
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(draw, 40);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="matrix-hero">
            <canvas ref={canvasRef} className="matrix-canvas" />
            <div className="hero-content">
                <h1>SaaS Cloner</h1>
                <p>Clone production-ready UIs in seconds — dashboards, auth pages, billing, and more.</p>
            </div>
        </section>
    );
}
