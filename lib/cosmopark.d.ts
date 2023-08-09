import { CosmoparkChain, CosmoparkConfig, CosmoparkNetworkPortOutput } from './types';
export declare class Cosmopark {
    private debug;
    private context;
    private filename;
    ports: Record<string, CosmoparkNetworkPortOutput>;
    config: CosmoparkConfig;
    networks: Record<string, CosmoparkChain>;
    relayers: any[];
    constructor(config: CosmoparkConfig);
    static create(config: CosmoparkConfig): Promise<Cosmopark>;
    stop: () => Promise<void>;
    generateDockerCompose(): Promise<void>;
    validateConfig: (config: CosmoparkConfig) => void;
}
