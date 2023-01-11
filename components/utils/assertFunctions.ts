export function assertState<TType extends string>(
    state: { type: string},
    expectedType: TType
    ): asserts state is StateMember<TType> {
        if(expectedType !== state.type) {
            throw new Error(`Invalid state ${state.type}`)
        }
    }

    interface StateMember<T> {
        type: T
    }