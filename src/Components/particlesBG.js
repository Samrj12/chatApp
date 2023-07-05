import { useCallback } from "react";
import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";
const ParticlesBG = () => {
    
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container) => {
        // Customize the particles instance after it's loaded
        container.options.particles.number.density.value_area = 1200; // Adjust the density (increase/decrease value)
        container.options.particles.move.bounce = true; // Enable bouncing
        container.options.particles.move.bounceHorizontal = true; // Enable horizontal bouncing
        container.options.particles.move.bounceVertical = true; // Enable vertical bouncing
        container.options.particles.move.attract.enable = true; // Enable motion attraction
        container.options.particles.move.attract.rotateX = 3000; // Adjust attract rotation X-axis
        container.options.particles.move.attract.rotateY = 3000; // Adjust attract rotation Y-axis
        container.options.particles.move.attract.speed = 0.8; // Adjust attract speed (increase/decrease value)
      }, []);
    return (
        <Particles
        className="absolute w-screen h-screen -z-10 bg-slate-200"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    // color: {
                    //     value: "#0d47a1",
                    // },
                },
                fullScreen: {
                    enable: false,
                   // zIndex: -10,
                },
                fpsLimit: 120,
                particles: {
                    color: {
                        value: "#BEBEBE",
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: false,
                        straight: false,
                    },
                    number: {
                        value: 50,
                    },
                    opacity: {
                        value: { min: 0.1, max: 0.5 },
                    },
                    size: {
                        value: { min: 1, max: 10 },
                    }, 
                    wobble: {
                        distance: 20,
                        enable: true,
                        speed: {
                            min: -5,
                            max: 5,
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBG;