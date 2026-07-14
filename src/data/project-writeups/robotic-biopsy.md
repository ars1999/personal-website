## Introduction

The project aims to develop a low-cost, portable robotic system for automated needle insertion in soft tissue biopsies, tested on a gelatin-based liver phantom containing an embedded "lesion" (grape). The system is designed to enhance the accuracy and efficiency of needle insertion through advanced computer vision, real-time motion control, and sensor feedback mechanisms, giving the following advantages: minimally invasive and high-precision operation that reduces the risk of procedural complications; real-time feedback for dynamic adjustments, where continuous needle tracking helps adjust for patient movement (e.g. respiration) in real time, reducing errors; and reduced healthcare costs that improve accessibility to high-precision diagnostics.

![Annotated robotic biopsy system, showing the gantry, end-effector, power, camera, and computing subsystems](/images/projects/biopsy.png)

## Methods

**System architecture** — The robot is built from five integrated subsystems working together for autonomous needle insertion: a gantry system for coarse positioning, an end-effector system for needle actuation, a power system, a camera system for real-time target localization, and a computing system tying vision, control, and actuation together.

![Annotated robotic biopsy system, showing the gantry, end-effector, power, camera, and computing subsystems](/images/projects/RobotBiopsyMethod.png)

## Results

- **High Precision** — Achieved gantry positional accuracy of ±0.5 mm (95% accuracy) and angular actuator accuracy of 85%.
- **Operational Efficiency** — Linear actuator positioning completed within 10 seconds, and gantry positioning within 15 seconds.
- **Robust and Modular** — Modular gantry design ensures stable, repeatable performance, facilitating ease of maintenance and future upgrades.
- **Real-Time Vision Integration** — Integrated computer vision successfully localized targets and dynamically adjusted needle insertion to simulated respiratory movements.
- **Cost-Effective Design** — Delivered the complete robotic biopsy system under $1200, leveraging affordable components. 

