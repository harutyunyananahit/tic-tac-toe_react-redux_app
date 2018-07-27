export function handle_click(i) {
    return {
        type: "HANDLE_CLICK",
        i
    };
}

export function jump_to_state(step) {
    return {
        type: "JUMP_TO_STATE",
        step
    };
}
