import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleEffect = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'trail',
            },
            resize: true,
          },
          modes: {
            trail: {
              delay: 0.2,
              quantity: 5,
              particles: {
                color: {
                  value: '#ffffff',
                },
                move: {
                  speed: 5,
                  outModes: {
                    default: 'destroy',
                  },
                },
              },
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 0,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: 3,
            random: {
              enable: true,
              minimumValue: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleEffect;
