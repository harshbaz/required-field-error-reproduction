import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface User { 'name' : string }
export interface _SERVICE { 'greet' : ActorMethod<[string], User> }
