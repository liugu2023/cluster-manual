# 集群硬件综述

## 1.1 概述

本套集群系统共有八台高性能主机组成，其中一台为登录节点（管理节点，无加速计算卡），其余七台为计算节点。计算节点的主要计算设备为 GeForce GTX TITAN X，GeForce RTX 3090，Tesla P100，其中 GeForce GTX TITAN X 和 GeForce RTX 3090 单精度浮点运算能力强，适合进行适合于做大规模的可视化渲染，机器学习模型训练等计算，Tesla P100 双精度浮点运算能力强，适合用于科学计算等双精度浮点运算应用。用户可以根据需求选择不同的设备运行作业，达到最好的加速效果。

## 1.2 硬件配置

| 节点名称 | CPU | 内存 | GPU |
|---------|---------|----------|---------------|
| login | Intel(R) Xeon(R) Gold 5218R CPU @ 2.Hz | 144G | None |
| compute01 | Intel(R) Xeon(R) Gold 5218R CPU @ 2.Hz | 144G | GeForce RTX 3090 × 2 |
| compute02 | Intel(R) Xeon(R) CPU E5-2620 v2 @ 2.Hz | 32G | GeForce GTX TITAN X × 4 |
| compute03 | Intel(R) Xeon(R) CPU E5-2620 v2 @ 2.Hz | 144G | GeForce GTX TITAN X × 4 |
| compute04 | Intel(R) Xeon(R) CPU E5-2620 v2 @ 2.Hz | 144G | GeForce RTX 3090 × 2 |
| compute05 | Intel(R) Xeon(R) CPU E5-2620 v2 @ 2.Hz | 144G | GeForce RTX 3090 × 2 |
| compute06 | Intel(R) Xeon(R) CPU E5-2620 v2 @ 2.Hz | 144G | Tesla P100 × 2 |
| compute07 | Intel(R) Xeon(R) CPU E5-2620 v2 @ 2.Hz | 144G | Tesla P100 × 2 |

## 1.3 网络配置

集群使用千兆以太网作为集群管理网络，使用 56GB/s Infiniband 高速网作为集群计算网络。

| 节点名称 | 以太网 | Infiniband |
|---------|---------|------------|
| login | 10.21.22.100 | IP |
| compute01 | 10.21.22.201 | IP |
| compute02 | 10.21.22.202 | IP |
| compute03 | 10.21.22.203 | IP |
| compute04 | 10.21.22.204 | IP |
| compute05 | 10.21.22.205 | IP |
| compute06 | 10.21.22.206 | IP |
| compute07 | 10.21.22.207 | IP |

## GPU性能特点

- **GeForce RTX 3090**: 适合机器学习模型训练、深度学习等单精度计算密集型任务
- **GeForce GTX TITAN X**: 适合大规模可视化渲染、图形处理等应用
- **Tesla P100**: 适合科学计算、数值模拟等双精度浮点运算应用

用户可根据具体计算需求选择合适的GPU节点，以获得最佳的计算性能。