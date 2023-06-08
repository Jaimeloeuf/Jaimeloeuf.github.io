import type { RouteObject } from "./RouteTypes";

import { HomeRoute } from "./PublicRoutes";

/**
 * All the **USER DEFINED** route objects to be registered with the router.
 * User MUST explicitly import route objects from their definition modules,
 * and put it in this array for the router.
 *
 * The const assertion is used to ensure that this array cannot be modified
 * during runtime, all route object registration must be done here.
 */
export const Routes = (<const>[
  /* Public Routes */
  HomeRoute,

  // `satisfies` operator is used to typecheck all RouteObjects to ensure
  // that the AuthRequirements field is defined in the meta field.
]) satisfies ReadonlyArray<RouteObject>;
