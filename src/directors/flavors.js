const flavors = {
    aws: {
        standard: { vcpus: 2, memoryGB: 4 }, // t3.medium
        memoryOptimized: { vcpus: 2, memoryGB: 16 }, // r5.large
        computeOptimized: { vcpus: 2, memoryGB: 4 }, // c5.large
    },
    azure: {
        standard: { vcpus: 2, memoryGB: 8 }, // D2s_v3
        memoryOptimized: { vcpus: 2, memoryGB: 16 }, // E2s_v3
        computeOptimized: { vcpus: 2, memoryGB: 4 }, // F2s_v2
    },
    gcp: {
        standard: { vcpus: 2, memoryGB: 8 }, // e2-standard-2
        memoryOptimized: { vcpus: 2, memoryGB: 16 }, // n2-highmem-2
        computeOptimized: { vcpus: 2, memoryGB: 2 }, // n2-highcpu-2
    },
    onpremise: {
        standard: { vcpus: 2, memoryGB: 4 }, // onprem-std1
        memoryOptimized: { vcpus: 2, memoryGB: 16 }, // onprem-mem1
        computeOptimized: { vcpus: 2, memoryGB: 2 }, // onprem-cpu1
    },
};

module.exports = flavors;