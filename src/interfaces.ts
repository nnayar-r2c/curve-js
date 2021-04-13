export interface ObjectInterface<T> {
    [index: string]: T,
}

export interface PoolListItemInterface {
    type: string,
    name: string,
}

export interface CoinInterface {
    name: string,
    decimals: number,
    tethered: boolean,
    underlying_address: string,
    wrapped_address?: string,
    wrapped_decimals?: number,
}

export interface PoolDataInterface {
    lp_contract: string,
    lp_token_address: string,
    gauge_addresses: string[],
    coins: CoinInterface[],
    swap_address?: string,
    base_pool?: string,
    pool_types?: string[],
    zap_address?: string,
    lp_constructor?: ObjectInterface<unknown>,
    swap_constructor?: ObjectInterface<unknown>,
    testing?: ObjectInterface<unknown>,
}
