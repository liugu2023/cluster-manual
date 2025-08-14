# SLURM作业调度系统

登录节点没有配置GPU，主要用于用户配置程序运行环境，编译程序等操作，如作业需要使用GPU资源，请参考如下说明：

## 4.1 节点信息查询

使用 `sinfo` 命令查询当前可用的作业提交队列以及节点状态。

```bash
sinfo
```

### 当前可用作业队列

| 队列名称 | 节点 | 用途 |
|---------|------|----------|
| dlq | compute01、compute04-compute05 | 深度学习队列，配备RTX 3090 GPU |
| hpcq | compute06-compute07 | 高性能计算队列，配备Tesla P100 GPU |
| testnodes | compute02-compute03 | 测试节点，配备GTX TITAN X GPU |

### 常见节点状态

| 状态 | 说明 |
|---------|------|
| idle | 节点空闲 |
| down | 节点已下线 |
| drain | 节点排空 |
| mix | 节点已使用部分资源 |
| alloc | 节点已被分配 |

**注意**：除 `idle` 和 `mix` 状态外，其余状态节点均不可运行作业。

## 4.2 当前作业情况查询

使用 `squeue` 命令查看当前运行和等待运行的作业列表：

```bash
squeue
```

其中 `NODELIST(REASON)` 显示作业所在节点，或未执行作业的等待原因。

## 4.3 交互式任务提交

使用 `srun` 命令提交交互式任务：

```bash
srun <申请资源> <运行命令>
```

**示例**：
```bash
srun --partition=dlq --gres=gpu:1 --mem=10G --cpus-per-task=2 --pty /bin/bash
```

用户可以通过 `squeue` 查看分配到的节点，也可通过主机名称查看分配到的节点，程序运行结果会输出到终端。

## 4.4 独占式任务提交（调试程序）

使用 `salloc` 命令申请独占资源：

```bash
salloc <申请资源>
```

**示例**：
```bash
salloc --partition=dlq --gres=gpu:1 --mem=10G --cpus-per-task=2
```

成功分配资源后，用户可以通过 `squeue` 查看分配到的节点，并 `ssh` 到节点调试程序，解决程序BUG后，再使用脚本式任务提交。

## 4.5 脚本式任务提交

### 4.5.1 作业提交流程

1. 构建任务提交脚本（具体参数见下文）
2. 执行命令提交作业：
   ```bash
   sbatch <脚本文件>
   ```

### 4.5.2 GPU作业提交脚本

```bash
#!/bin/bash

#SBATCH -J JobName      # 作业名称
#SBATCH -p dlq          # 作业队列
#SBATCH -w compute01    # 作业运行节点
#SBATCH -o Job.out      # 作业输出文件
#SBATCH -N 1            # 作业申请节点数
#SBATCH --ntasks-per-node=1 # 每个节点任务数
#SBATCH --cpus-per-task=1   # 每个任务CPU数
#SBATCH -t 1:00:00     # 作业最长运行时间
#SBATCH --gres=gpu:1   # 作业申请GPU数

./job.sh
```

**注意事项**：
1. 不推荐指定节点提交，可能导致作业长时间排队
2. 默认情况下内存占用和CPU占用与申请资源一致，若作业占用资源超过申请资源，作业会被强制终止

### 4.5.3 MPI作业提交脚本

```bash
#!/bin/bash

#SBATCH -J JobName      # 作业名称
#SBATCH -p dlq          # 作业队列
#SBATCH -o Job.out      # 作业输出文件
#SBATCH -N 1            # 作业申请节点数
#SBATCH --ntasks-per-node=1 # 每个节点任务数
#SBATCH -t 1:00:00     # 作业最长运行时间

mpirun -np 8 ./job.sh
```

## 4.6 取消作业

使用 `scancel` 命令取消作业：

```bash
scancel <作业ID>
```

取消相应作业的等待或执行，作业ID可通过 `squeue` 查询获得。

## 常用参数说明

| 参数 | 说明 | 示例 |
|------|------|------|
| `-J` | 作业名称 | `-J MyJob` |
| `-p` | 队列名称 | `-p dlq` |
| `-N` | 节点数量 | `-N 1` |
| `--gres` | GPU资源 | `--gres=gpu:2` |
| `--mem` | 内存大小 | `--mem=16G` |
| `--cpus-per-task` | CPU核心数 | `--cpus-per-task=4` |
| `-t` | 运行时间 | `-t 2:00:00` |
| `-o` | 输出文件 | `-o output.log` |

更多详细参数请参考SLURM官方文档。