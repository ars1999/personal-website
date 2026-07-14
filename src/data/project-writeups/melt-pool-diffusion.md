## Introduction
![Annotated robotic biopsy system, showing the gantry, end-effector, power, camera, and computing subsystems](/images/projects/SRDiff_Main.png)


Laser Powder Bed Fusion (L-PBF) is a key additive manufacturing process, but optimizing process maps requires extensive computational fluid dynamics (CFD) simulations. High-resolution CFD simulations are computationally expensive, making real-time defect prediction and parameter optimization challenging. This project explores a diffusion-based super-resolution model that upscales low-resolution melt pool simulations, reducing computational costs while maintaining accuracy. By leveraging deep learning, specifically denoising diffusion probabilistic models (DDPM), this approach aims to enhance the resolution of L-PBF simulations without requiring additional experimental builds.

## Methods

The model follows a two-stage process:

- **ESRGAN-based encoder** — Low-resolution melt pool images are first passed through an Enhanced Super-Resolution Generative Adversarial Network (ESRGAN) encoder, extracting structural features and forming a detailed baseline representation.
- **Diffusion model refinement** — A denoising diffusion probabilistic model (DDPM) refines the upsampled output, capturing fine details and stochastic variations in melt pool morphology.
- **Training and evaluation** — The model was trained on datasets containing low-resolution (20 µm) and high-resolution (5 µm) images of stainless steel (SS316L) melt pools generated using FLOW-3D's solver. Performance was measured using Mean Absolute Error (MAE), comparing predicted temperature fields and key melt pool features like keyhole porosity.

## Results
![Annotated robotic biopsy system, showing the gantry, end-effector, power, camera, and computing subsystems](/images/projects/Training_Sequence.png)


The diffusion-based super-resolution pipeline reduced the computational cost of high-fidelity melt pool simulation by roughly 100x while preserving the temperature-field and keyhole-porosity detail needed for defect prediction, enabling precise melt pool and keyhole predictions to improve defect control in additive manufacturing.
