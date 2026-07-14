## Introduction

Finite Element Analysis (FEA) is essential for assessing mechanical properties in engineering but is computationally intensive. This project introduces deep learning-based finite element analysis (DLFEA), which integrates graph neural networks (GNNs) to create efficient surrogate models. These models enable faster and more accurate simulations, particularly for biomedical applications like bioprosthetic heart valves (BHVs).

## Methods

- **Data collection and preprocessing** — The dataset was sourced from prior research, containing 18,668 simulations of heart valve deformations, with parameters such as valve thickness, pressure conditions, and material properties varied across simulations. NURBS-based isogeometric analysis (IGA) was used to generate high-fidelity simulations for training.
- **Graph neural network models** — Two GNN architectures were developed: a Graph Convolutional Network (GCN), which preserves spatial and topological integrity via message passing and aggregation between mesh nodes, and MeshGraphNets, a more advanced GNN variant tailored for FEA that integrates local and global geometric information for better generalization.

## Results
![Annotated robotic biopsy system, showing the gantry, end-effector, power, camera, and computing subsystems](/images/projects/f17.png)

![Annotated robotic biopsy system, showing the gantry, end-effector, power, camera, and computing subsystems](/images/projects/dlfea1.png)

![Annotated robotic biopsy system, showing the gantry, end-effector, power, camera, and computing subsystems](/images/projects/f15.png)

- Both GNN models outperformed the CNN baseline, with MeshGraphNets achieving the best accuracy in deformation predictions (R² = 0.96, a 1.5% improvement over the 3D ConvNet baseline).
- Graph-based architectures better capture the spatial and topological relationships in FEA data, leading to more reliable biomechanical modeling.
