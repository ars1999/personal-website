## Introduction

- Dexterous hands hard-couple actuators to manipulators — no mechanical separation point, whether motors sit in the palm (Allegro) or remotely (Shadow).
- One worn tendon or damaged finger means full disassembly: tedious re-routing, hours of downtime.
- Manipulators wear out faster than motors, yet motors — 60–70% of BOM cost — stay locked to a single hand.
- Goal: an actuator–coupler architecture that decouples the two, for repairability (minutes, not hours), replaceability (swap, don't rebuild), and reconfigurability (one actuator, many end effectors).

## Methods
![Annotated robotic biopsy system, showing the gantry, end-effector, power, camera, and computing subsystems](/images/projects/hand2.png)


- Requirements: ≥100 N tendon force, 4 channels, continuous duty, ≤1000 g, ≤10 min re-string, tool-less hot-swap.
- Actuator: spring-preloaded spool with a tendon-driven tensioner slider — motor controls tendon length, spring controls tension, eliminating slack on direction reversals.
- Coupler: passive sliding coupler — pulley routing maintains tendon continuity under axial motion, crimp terminations transfer load, and slider-in-channel geometry prevents off-axis loading.
- Integration: 4-motor housing, guide/motor pulleys, coupler guideway, and couplers in a compact inline stack mated to a 3D-printed tendon-driven hand.



## Results
![Annotated robotic biopsy system, showing the gantry, end-effector, power, camera, and computing subsystems](/images/projects/hand3.png)


- Tendon replacement in ~2 minutes, no actuator disassembly.
- End effectors swap without re-threading tendons or recalibrating motors.
- One actuator module drives multiple hands via a standardized tendon interface — 60–70% of BOM retained across configurations.
- Next: snap-fit/magnetic tendon termination, self-aligning keyed coupler for blind mating, automatic tension take-up → target <30 s one-motion swap.