import { createTypedHooks } from "easy-peasy";

import type { AppStore } from ".";

const { useStoreState, useStoreActions } = createTypedHooks<AppStore>()

export { useStoreState, useStoreActions }