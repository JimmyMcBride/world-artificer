
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model World
 * 
 */
export type World = $Result.DefaultSelection<Prisma.$WorldPayload>
/**
 * Model WorldEntity
 * 
 */
export type WorldEntity = $Result.DefaultSelection<Prisma.$WorldEntityPayload>
/**
 * Model EntityRelationship
 * 
 */
export type EntityRelationship = $Result.DefaultSelection<Prisma.$EntityRelationshipPayload>
/**
 * Model WorldContent
 * 
 */
export type WorldContent = $Result.DefaultSelection<Prisma.$WorldContentPayload>
/**
 * Model NotificationPreferences
 * 
 */
export type NotificationPreferences = $Result.DefaultSelection<Prisma.$NotificationPreferencesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ExperienceLevel: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

export type ExperienceLevel = (typeof ExperienceLevel)[keyof typeof ExperienceLevel]


export const CommunicationStyle: {
  ENCOURAGING: 'ENCOURAGING',
  DIRECT: 'DIRECT',
  DETAILED: 'DETAILED',
  MINIMAL: 'MINIMAL'
};

export type CommunicationStyle = (typeof CommunicationStyle)[keyof typeof CommunicationStyle]


export const WorldStatus: {
  ACTIVE: 'ACTIVE',
  ARCHIVED: 'ARCHIVED',
  COMPLETED: 'COMPLETED'
};

export type WorldStatus = (typeof WorldStatus)[keyof typeof WorldStatus]


export const EntityType: {
  CHARACTER: 'CHARACTER',
  LOCATION: 'LOCATION',
  FACTION: 'FACTION',
  EVENT: 'EVENT',
  CONCEPT: 'CONCEPT',
  ITEM: 'ITEM'
};

export type EntityType = (typeof EntityType)[keyof typeof EntityType]


export const ContentType: {
  NOTE: 'NOTE',
  DOCUMENT: 'DOCUMENT',
  BRAINDUMP: 'BRAINDUMP',
  TEMPLATE: 'TEMPLATE'
};

export type ContentType = (typeof ContentType)[keyof typeof ContentType]

}

export type ExperienceLevel = $Enums.ExperienceLevel

export const ExperienceLevel: typeof $Enums.ExperienceLevel

export type CommunicationStyle = $Enums.CommunicationStyle

export const CommunicationStyle: typeof $Enums.CommunicationStyle

export type WorldStatus = $Enums.WorldStatus

export const WorldStatus: typeof $Enums.WorldStatus

export type EntityType = $Enums.EntityType

export const EntityType: typeof $Enums.EntityType

export type ContentType = $Enums.ContentType

export const ContentType: typeof $Enums.ContentType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs>;

  /**
   * `prisma.world`: Exposes CRUD operations for the **World** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Worlds
    * const worlds = await prisma.world.findMany()
    * ```
    */
  get world(): Prisma.WorldDelegate<ExtArgs>;

  /**
   * `prisma.worldEntity`: Exposes CRUD operations for the **WorldEntity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorldEntities
    * const worldEntities = await prisma.worldEntity.findMany()
    * ```
    */
  get worldEntity(): Prisma.WorldEntityDelegate<ExtArgs>;

  /**
   * `prisma.entityRelationship`: Exposes CRUD operations for the **EntityRelationship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EntityRelationships
    * const entityRelationships = await prisma.entityRelationship.findMany()
    * ```
    */
  get entityRelationship(): Prisma.EntityRelationshipDelegate<ExtArgs>;

  /**
   * `prisma.worldContent`: Exposes CRUD operations for the **WorldContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorldContents
    * const worldContents = await prisma.worldContent.findMany()
    * ```
    */
  get worldContent(): Prisma.WorldContentDelegate<ExtArgs>;

  /**
   * `prisma.notificationPreferences`: Exposes CRUD operations for the **NotificationPreferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationPreferences
    * const notificationPreferences = await prisma.notificationPreferences.findMany()
    * ```
    */
  get notificationPreferences(): Prisma.NotificationPreferencesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    UserProfile: 'UserProfile',
    World: 'World',
    WorldEntity: 'WorldEntity',
    EntityRelationship: 'EntityRelationship',
    WorldContent: 'WorldContent',
    NotificationPreferences: 'NotificationPreferences'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'session' | 'userProfile' | 'world' | 'worldEntity' | 'entityRelationship' | 'worldContent' | 'notificationPreferences'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      World: {
        payload: Prisma.$WorldPayload<ExtArgs>
        fields: Prisma.WorldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorldFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorldFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          findFirst: {
            args: Prisma.WorldFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorldFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          findMany: {
            args: Prisma.WorldFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>[]
          }
          create: {
            args: Prisma.WorldCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          createMany: {
            args: Prisma.WorldCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WorldDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          update: {
            args: Prisma.WorldUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          deleteMany: {
            args: Prisma.WorldDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WorldUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WorldUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          aggregate: {
            args: Prisma.WorldAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWorld>
          }
          groupBy: {
            args: Prisma.WorldGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WorldGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorldCountArgs<ExtArgs>,
            result: $Utils.Optional<WorldCountAggregateOutputType> | number
          }
        }
      }
      WorldEntity: {
        payload: Prisma.$WorldEntityPayload<ExtArgs>
        fields: Prisma.WorldEntityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorldEntityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldEntityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorldEntityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldEntityPayload>
          }
          findFirst: {
            args: Prisma.WorldEntityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldEntityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorldEntityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldEntityPayload>
          }
          findMany: {
            args: Prisma.WorldEntityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldEntityPayload>[]
          }
          create: {
            args: Prisma.WorldEntityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldEntityPayload>
          }
          createMany: {
            args: Prisma.WorldEntityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WorldEntityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldEntityPayload>
          }
          update: {
            args: Prisma.WorldEntityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldEntityPayload>
          }
          deleteMany: {
            args: Prisma.WorldEntityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WorldEntityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WorldEntityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldEntityPayload>
          }
          aggregate: {
            args: Prisma.WorldEntityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWorldEntity>
          }
          groupBy: {
            args: Prisma.WorldEntityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WorldEntityGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorldEntityCountArgs<ExtArgs>,
            result: $Utils.Optional<WorldEntityCountAggregateOutputType> | number
          }
        }
      }
      EntityRelationship: {
        payload: Prisma.$EntityRelationshipPayload<ExtArgs>
        fields: Prisma.EntityRelationshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntityRelationshipFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityRelationshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntityRelationshipFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityRelationshipPayload>
          }
          findFirst: {
            args: Prisma.EntityRelationshipFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityRelationshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntityRelationshipFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityRelationshipPayload>
          }
          findMany: {
            args: Prisma.EntityRelationshipFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityRelationshipPayload>[]
          }
          create: {
            args: Prisma.EntityRelationshipCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityRelationshipPayload>
          }
          createMany: {
            args: Prisma.EntityRelationshipCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EntityRelationshipDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityRelationshipPayload>
          }
          update: {
            args: Prisma.EntityRelationshipUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityRelationshipPayload>
          }
          deleteMany: {
            args: Prisma.EntityRelationshipDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EntityRelationshipUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EntityRelationshipUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityRelationshipPayload>
          }
          aggregate: {
            args: Prisma.EntityRelationshipAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEntityRelationship>
          }
          groupBy: {
            args: Prisma.EntityRelationshipGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EntityRelationshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntityRelationshipCountArgs<ExtArgs>,
            result: $Utils.Optional<EntityRelationshipCountAggregateOutputType> | number
          }
        }
      }
      WorldContent: {
        payload: Prisma.$WorldContentPayload<ExtArgs>
        fields: Prisma.WorldContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorldContentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorldContentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldContentPayload>
          }
          findFirst: {
            args: Prisma.WorldContentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorldContentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldContentPayload>
          }
          findMany: {
            args: Prisma.WorldContentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldContentPayload>[]
          }
          create: {
            args: Prisma.WorldContentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldContentPayload>
          }
          createMany: {
            args: Prisma.WorldContentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WorldContentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldContentPayload>
          }
          update: {
            args: Prisma.WorldContentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldContentPayload>
          }
          deleteMany: {
            args: Prisma.WorldContentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WorldContentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WorldContentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WorldContentPayload>
          }
          aggregate: {
            args: Prisma.WorldContentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWorldContent>
          }
          groupBy: {
            args: Prisma.WorldContentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WorldContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorldContentCountArgs<ExtArgs>,
            result: $Utils.Optional<WorldContentCountAggregateOutputType> | number
          }
        }
      }
      NotificationPreferences: {
        payload: Prisma.$NotificationPreferencesPayload<ExtArgs>
        fields: Prisma.NotificationPreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationPreferencesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationPreferencesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencesPayload>
          }
          findFirst: {
            args: Prisma.NotificationPreferencesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationPreferencesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencesPayload>
          }
          findMany: {
            args: Prisma.NotificationPreferencesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencesPayload>[]
          }
          create: {
            args: Prisma.NotificationPreferencesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencesPayload>
          }
          createMany: {
            args: Prisma.NotificationPreferencesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NotificationPreferencesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencesPayload>
          }
          update: {
            args: Prisma.NotificationPreferencesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencesPayload>
          }
          deleteMany: {
            args: Prisma.NotificationPreferencesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationPreferencesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NotificationPreferencesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencesPayload>
          }
          aggregate: {
            args: Prisma.NotificationPreferencesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNotificationPreferences>
          }
          groupBy: {
            args: Prisma.NotificationPreferencesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NotificationPreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationPreferencesCountArgs<ExtArgs>,
            result: $Utils.Optional<NotificationPreferencesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    worlds: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    worlds?: boolean | UserCountOutputTypeCountWorldsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldWhereInput
  }



  /**
   * Count Type WorldCountOutputType
   */

  export type WorldCountOutputType = {
    entities: number
    content: number
    relationships: number
  }

  export type WorldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entities?: boolean | WorldCountOutputTypeCountEntitiesArgs
    content?: boolean | WorldCountOutputTypeCountContentArgs
    relationships?: boolean | WorldCountOutputTypeCountRelationshipsArgs
  }

  // Custom InputTypes

  /**
   * WorldCountOutputType without action
   */
  export type WorldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldCountOutputType
     */
    select?: WorldCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WorldCountOutputType without action
   */
  export type WorldCountOutputTypeCountEntitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldEntityWhereInput
  }


  /**
   * WorldCountOutputType without action
   */
  export type WorldCountOutputTypeCountContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldContentWhereInput
  }


  /**
   * WorldCountOutputType without action
   */
  export type WorldCountOutputTypeCountRelationshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntityRelationshipWhereInput
  }



  /**
   * Count Type WorldEntityCountOutputType
   */

  export type WorldEntityCountOutputType = {
    sourceRelationships: number
    targetRelationships: number
  }

  export type WorldEntityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceRelationships?: boolean | WorldEntityCountOutputTypeCountSourceRelationshipsArgs
    targetRelationships?: boolean | WorldEntityCountOutputTypeCountTargetRelationshipsArgs
  }

  // Custom InputTypes

  /**
   * WorldEntityCountOutputType without action
   */
  export type WorldEntityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldEntityCountOutputType
     */
    select?: WorldEntityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WorldEntityCountOutputType without action
   */
  export type WorldEntityCountOutputTypeCountSourceRelationshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntityRelationshipWhereInput
  }


  /**
   * WorldEntityCountOutputType without action
   */
  export type WorldEntityCountOutputTypeCountTargetRelationshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntityRelationshipWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string | null
    emailVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    worlds?: boolean | User$worldsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    worlds?: boolean | User$worldsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      worlds: Prisma.$WorldPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string | null
      emailVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    worlds<T extends User$worldsArgs<ExtArgs> = {}>(args?: Subset<T, User$worldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }


  /**
   * User.worlds
   */
  export type User$worldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInclude<ExtArgs> | null
    where?: WorldWhereInput
    orderBy?: WorldOrderByWithRelationInput | WorldOrderByWithRelationInput[]
    cursor?: WorldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorldScalarFieldEnum | WorldScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    experienceLevel: $Enums.ExperienceLevel | null
    communicationStyle: $Enums.CommunicationStyle | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    experienceLevel: $Enums.ExperienceLevel | null
    communicationStyle: $Enums.CommunicationStyle | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    experienceLevel: number
    preferredGenres: number
    communicationStyle: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    experienceLevel?: true
    communicationStyle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    experienceLevel?: true
    communicationStyle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    experienceLevel?: true
    preferredGenres?: true
    communicationStyle?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    experienceLevel: $Enums.ExperienceLevel
    preferredGenres: string[]
    communicationStyle: $Enums.CommunicationStyle
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    experienceLevel?: boolean
    preferredGenres?: boolean
    communicationStyle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notificationPreferences?: boolean | UserProfile$notificationPreferencesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    experienceLevel?: boolean
    preferredGenres?: boolean
    communicationStyle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notificationPreferences?: boolean | UserProfile$notificationPreferencesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      notificationPreferences: Prisma.$NotificationPreferencesPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      experienceLevel: $Enums.ExperienceLevel
      preferredGenres: string[]
      communicationStyle: $Enums.CommunicationStyle
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }


  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserProfile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
    **/
    create<T extends UserProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserProfiles.
     *     @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     *     @example
     *     // Create many UserProfiles
     *     const userProfile = await prisma.userProfile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
    **/
    delete<T extends UserProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
    **/
    upsert<T extends UserProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    notificationPreferences<T extends UserProfile$notificationPreferencesArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$notificationPreferencesArgs<ExtArgs>>): Prisma__NotificationPreferencesClient<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserProfile model
   */ 
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly experienceLevel: FieldRef<"UserProfile", 'ExperienceLevel'>
    readonly preferredGenres: FieldRef<"UserProfile", 'String[]'>
    readonly communicationStyle: FieldRef<"UserProfile", 'CommunicationStyle'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }


  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }


  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }


  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }


  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
  }


  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }


  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
  }


  /**
   * UserProfile.notificationPreferences
   */
  export type UserProfile$notificationPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationPreferencesInclude<ExtArgs> | null
    where?: NotificationPreferencesWhereInput
  }


  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
  }



  /**
   * Model World
   */

  export type AggregateWorld = {
    _count: WorldCountAggregateOutputType | null
    _avg: WorldAvgAggregateOutputType | null
    _sum: WorldSumAggregateOutputType | null
    _min: WorldMinAggregateOutputType | null
    _max: WorldMaxAggregateOutputType | null
  }

  export type WorldAvgAggregateOutputType = {
    confidenceScore: number | null
  }

  export type WorldSumAggregateOutputType = {
    confidenceScore: number | null
  }

  export type WorldMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    genre: string | null
    status: $Enums.WorldStatus | null
    confidenceScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorldMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    genre: string | null
    status: $Enums.WorldStatus | null
    confidenceScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorldCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    genre: number
    status: number
    confidenceScore: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorldAvgAggregateInputType = {
    confidenceScore?: true
  }

  export type WorldSumAggregateInputType = {
    confidenceScore?: true
  }

  export type WorldMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    genre?: true
    status?: true
    confidenceScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorldMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    genre?: true
    status?: true
    confidenceScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorldCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    genre?: true
    status?: true
    confidenceScore?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which World to aggregate.
     */
    where?: WorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worlds to fetch.
     */
    orderBy?: WorldOrderByWithRelationInput | WorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Worlds
    **/
    _count?: true | WorldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorldMaxAggregateInputType
  }

  export type GetWorldAggregateType<T extends WorldAggregateArgs> = {
        [P in keyof T & keyof AggregateWorld]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorld[P]>
      : GetScalarType<T[P], AggregateWorld[P]>
  }




  export type WorldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldWhereInput
    orderBy?: WorldOrderByWithAggregationInput | WorldOrderByWithAggregationInput[]
    by: WorldScalarFieldEnum[] | WorldScalarFieldEnum
    having?: WorldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorldCountAggregateInputType | true
    _avg?: WorldAvgAggregateInputType
    _sum?: WorldSumAggregateInputType
    _min?: WorldMinAggregateInputType
    _max?: WorldMaxAggregateInputType
  }

  export type WorldGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string | null
    genre: string | null
    status: $Enums.WorldStatus
    confidenceScore: number | null
    createdAt: Date
    updatedAt: Date
    _count: WorldCountAggregateOutputType | null
    _avg: WorldAvgAggregateOutputType | null
    _sum: WorldSumAggregateOutputType | null
    _min: WorldMinAggregateOutputType | null
    _max: WorldMaxAggregateOutputType | null
  }

  type GetWorldGroupByPayload<T extends WorldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorldGroupByOutputType[P]>
            : GetScalarType<T[P], WorldGroupByOutputType[P]>
        }
      >
    >


  export type WorldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    genre?: boolean
    status?: boolean
    confidenceScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    entities?: boolean | World$entitiesArgs<ExtArgs>
    content?: boolean | World$contentArgs<ExtArgs>
    relationships?: boolean | World$relationshipsArgs<ExtArgs>
    _count?: boolean | WorldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["world"]>

  export type WorldSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    genre?: boolean
    status?: boolean
    confidenceScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    entities?: boolean | World$entitiesArgs<ExtArgs>
    content?: boolean | World$contentArgs<ExtArgs>
    relationships?: boolean | World$relationshipsArgs<ExtArgs>
    _count?: boolean | WorldCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WorldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "World"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      entities: Prisma.$WorldEntityPayload<ExtArgs>[]
      content: Prisma.$WorldContentPayload<ExtArgs>[]
      relationships: Prisma.$EntityRelationshipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string | null
      genre: string | null
      status: $Enums.WorldStatus
      confidenceScore: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["world"]>
    composites: {}
  }


  type WorldGetPayload<S extends boolean | null | undefined | WorldDefaultArgs> = $Result.GetResult<Prisma.$WorldPayload, S>

  type WorldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorldFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: WorldCountAggregateInputType | true
    }

  export interface WorldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['World'], meta: { name: 'World' } }
    /**
     * Find zero or one World that matches the filter.
     * @param {WorldFindUniqueArgs} args - Arguments to find a World
     * @example
     * // Get one World
     * const world = await prisma.world.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorldFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WorldFindUniqueArgs<ExtArgs>>
    ): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one World that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorldFindUniqueOrThrowArgs} args - Arguments to find a World
     * @example
     * // Get one World
     * const world = await prisma.world.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorldFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first World that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldFindFirstArgs} args - Arguments to find a World
     * @example
     * // Get one World
     * const world = await prisma.world.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorldFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldFindFirstArgs<ExtArgs>>
    ): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first World that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldFindFirstOrThrowArgs} args - Arguments to find a World
     * @example
     * // Get one World
     * const world = await prisma.world.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorldFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Worlds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Worlds
     * const worlds = await prisma.world.findMany()
     * 
     * // Get first 10 Worlds
     * const worlds = await prisma.world.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worldWithIdOnly = await prisma.world.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorldFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a World.
     * @param {WorldCreateArgs} args - Arguments to create a World.
     * @example
     * // Create one World
     * const World = await prisma.world.create({
     *   data: {
     *     // ... data to create a World
     *   }
     * })
     * 
    **/
    create<T extends WorldCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WorldCreateArgs<ExtArgs>>
    ): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Worlds.
     *     @param {WorldCreateManyArgs} args - Arguments to create many Worlds.
     *     @example
     *     // Create many Worlds
     *     const world = await prisma.world.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorldCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a World.
     * @param {WorldDeleteArgs} args - Arguments to delete one World.
     * @example
     * // Delete one World
     * const World = await prisma.world.delete({
     *   where: {
     *     // ... filter to delete one World
     *   }
     * })
     * 
    **/
    delete<T extends WorldDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WorldDeleteArgs<ExtArgs>>
    ): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one World.
     * @param {WorldUpdateArgs} args - Arguments to update one World.
     * @example
     * // Update one World
     * const world = await prisma.world.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorldUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WorldUpdateArgs<ExtArgs>>
    ): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Worlds.
     * @param {WorldDeleteManyArgs} args - Arguments to filter Worlds to delete.
     * @example
     * // Delete a few Worlds
     * const { count } = await prisma.world.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorldDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Worlds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Worlds
     * const world = await prisma.world.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorldUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WorldUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one World.
     * @param {WorldUpsertArgs} args - Arguments to update or create a World.
     * @example
     * // Update or create a World
     * const world = await prisma.world.upsert({
     *   create: {
     *     // ... data to create a World
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the World we want to update
     *   }
     * })
    **/
    upsert<T extends WorldUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WorldUpsertArgs<ExtArgs>>
    ): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Worlds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldCountArgs} args - Arguments to filter Worlds to count.
     * @example
     * // Count the number of Worlds
     * const count = await prisma.world.count({
     *   where: {
     *     // ... the filter for the Worlds we want to count
     *   }
     * })
    **/
    count<T extends WorldCountArgs>(
      args?: Subset<T, WorldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a World.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorldAggregateArgs>(args: Subset<T, WorldAggregateArgs>): Prisma.PrismaPromise<GetWorldAggregateType<T>>

    /**
     * Group by World.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorldGroupByArgs['orderBy'] }
        : { orderBy?: WorldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the World model
   */
  readonly fields: WorldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for World.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    entities<T extends World$entitiesArgs<ExtArgs> = {}>(args?: Subset<T, World$entitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldEntityPayload<ExtArgs>, T, 'findMany'> | Null>;

    content<T extends World$contentArgs<ExtArgs> = {}>(args?: Subset<T, World$contentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldContentPayload<ExtArgs>, T, 'findMany'> | Null>;

    relationships<T extends World$relationshipsArgs<ExtArgs> = {}>(args?: Subset<T, World$relationshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityRelationshipPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the World model
   */ 
  interface WorldFieldRefs {
    readonly id: FieldRef<"World", 'String'>
    readonly userId: FieldRef<"World", 'String'>
    readonly title: FieldRef<"World", 'String'>
    readonly description: FieldRef<"World", 'String'>
    readonly genre: FieldRef<"World", 'String'>
    readonly status: FieldRef<"World", 'WorldStatus'>
    readonly confidenceScore: FieldRef<"World", 'Float'>
    readonly createdAt: FieldRef<"World", 'DateTime'>
    readonly updatedAt: FieldRef<"World", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * World findUnique
   */
  export type WorldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which World to fetch.
     */
    where: WorldWhereUniqueInput
  }


  /**
   * World findUniqueOrThrow
   */
  export type WorldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which World to fetch.
     */
    where: WorldWhereUniqueInput
  }


  /**
   * World findFirst
   */
  export type WorldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which World to fetch.
     */
    where?: WorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worlds to fetch.
     */
    orderBy?: WorldOrderByWithRelationInput | WorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Worlds.
     */
    cursor?: WorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Worlds.
     */
    distinct?: WorldScalarFieldEnum | WorldScalarFieldEnum[]
  }


  /**
   * World findFirstOrThrow
   */
  export type WorldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which World to fetch.
     */
    where?: WorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worlds to fetch.
     */
    orderBy?: WorldOrderByWithRelationInput | WorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Worlds.
     */
    cursor?: WorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Worlds.
     */
    distinct?: WorldScalarFieldEnum | WorldScalarFieldEnum[]
  }


  /**
   * World findMany
   */
  export type WorldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which Worlds to fetch.
     */
    where?: WorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worlds to fetch.
     */
    orderBy?: WorldOrderByWithRelationInput | WorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Worlds.
     */
    cursor?: WorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worlds.
     */
    skip?: number
    distinct?: WorldScalarFieldEnum | WorldScalarFieldEnum[]
  }


  /**
   * World create
   */
  export type WorldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * The data needed to create a World.
     */
    data: XOR<WorldCreateInput, WorldUncheckedCreateInput>
  }


  /**
   * World createMany
   */
  export type WorldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Worlds.
     */
    data: WorldCreateManyInput | WorldCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * World update
   */
  export type WorldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * The data needed to update a World.
     */
    data: XOR<WorldUpdateInput, WorldUncheckedUpdateInput>
    /**
     * Choose, which World to update.
     */
    where: WorldWhereUniqueInput
  }


  /**
   * World updateMany
   */
  export type WorldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Worlds.
     */
    data: XOR<WorldUpdateManyMutationInput, WorldUncheckedUpdateManyInput>
    /**
     * Filter which Worlds to update
     */
    where?: WorldWhereInput
  }


  /**
   * World upsert
   */
  export type WorldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * The filter to search for the World to update in case it exists.
     */
    where: WorldWhereUniqueInput
    /**
     * In case the World found by the `where` argument doesn't exist, create a new World with this data.
     */
    create: XOR<WorldCreateInput, WorldUncheckedCreateInput>
    /**
     * In case the World was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorldUpdateInput, WorldUncheckedUpdateInput>
  }


  /**
   * World delete
   */
  export type WorldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter which World to delete.
     */
    where: WorldWhereUniqueInput
  }


  /**
   * World deleteMany
   */
  export type WorldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worlds to delete
     */
    where?: WorldWhereInput
  }


  /**
   * World.entities
   */
  export type World$entitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldEntity
     */
    select?: WorldEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldEntityInclude<ExtArgs> | null
    where?: WorldEntityWhereInput
    orderBy?: WorldEntityOrderByWithRelationInput | WorldEntityOrderByWithRelationInput[]
    cursor?: WorldEntityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorldEntityScalarFieldEnum | WorldEntityScalarFieldEnum[]
  }


  /**
   * World.content
   */
  export type World$contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldContent
     */
    select?: WorldContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldContentInclude<ExtArgs> | null
    where?: WorldContentWhereInput
    orderBy?: WorldContentOrderByWithRelationInput | WorldContentOrderByWithRelationInput[]
    cursor?: WorldContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorldContentScalarFieldEnum | WorldContentScalarFieldEnum[]
  }


  /**
   * World.relationships
   */
  export type World$relationshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityRelationship
     */
    select?: EntityRelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntityRelationshipInclude<ExtArgs> | null
    where?: EntityRelationshipWhereInput
    orderBy?: EntityRelationshipOrderByWithRelationInput | EntityRelationshipOrderByWithRelationInput[]
    cursor?: EntityRelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntityRelationshipScalarFieldEnum | EntityRelationshipScalarFieldEnum[]
  }


  /**
   * World without action
   */
  export type WorldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldInclude<ExtArgs> | null
  }



  /**
   * Model WorldEntity
   */

  export type AggregateWorldEntity = {
    _count: WorldEntityCountAggregateOutputType | null
    _min: WorldEntityMinAggregateOutputType | null
    _max: WorldEntityMaxAggregateOutputType | null
  }

  export type WorldEntityMinAggregateOutputType = {
    id: string | null
    worldId: string | null
    entityType: $Enums.EntityType | null
    name: string | null
    description: string | null
    embeddingId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorldEntityMaxAggregateOutputType = {
    id: string | null
    worldId: string | null
    entityType: $Enums.EntityType | null
    name: string | null
    description: string | null
    embeddingId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorldEntityCountAggregateOutputType = {
    id: number
    worldId: number
    entityType: number
    name: number
    description: number
    content: number
    embeddingId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorldEntityMinAggregateInputType = {
    id?: true
    worldId?: true
    entityType?: true
    name?: true
    description?: true
    embeddingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorldEntityMaxAggregateInputType = {
    id?: true
    worldId?: true
    entityType?: true
    name?: true
    description?: true
    embeddingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorldEntityCountAggregateInputType = {
    id?: true
    worldId?: true
    entityType?: true
    name?: true
    description?: true
    content?: true
    embeddingId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorldEntityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorldEntity to aggregate.
     */
    where?: WorldEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldEntities to fetch.
     */
    orderBy?: WorldEntityOrderByWithRelationInput | WorldEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorldEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorldEntities
    **/
    _count?: true | WorldEntityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorldEntityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorldEntityMaxAggregateInputType
  }

  export type GetWorldEntityAggregateType<T extends WorldEntityAggregateArgs> = {
        [P in keyof T & keyof AggregateWorldEntity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorldEntity[P]>
      : GetScalarType<T[P], AggregateWorldEntity[P]>
  }




  export type WorldEntityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldEntityWhereInput
    orderBy?: WorldEntityOrderByWithAggregationInput | WorldEntityOrderByWithAggregationInput[]
    by: WorldEntityScalarFieldEnum[] | WorldEntityScalarFieldEnum
    having?: WorldEntityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorldEntityCountAggregateInputType | true
    _min?: WorldEntityMinAggregateInputType
    _max?: WorldEntityMaxAggregateInputType
  }

  export type WorldEntityGroupByOutputType = {
    id: string
    worldId: string
    entityType: $Enums.EntityType
    name: string
    description: string | null
    content: JsonValue | null
    embeddingId: string | null
    createdAt: Date
    updatedAt: Date
    _count: WorldEntityCountAggregateOutputType | null
    _min: WorldEntityMinAggregateOutputType | null
    _max: WorldEntityMaxAggregateOutputType | null
  }

  type GetWorldEntityGroupByPayload<T extends WorldEntityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorldEntityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorldEntityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorldEntityGroupByOutputType[P]>
            : GetScalarType<T[P], WorldEntityGroupByOutputType[P]>
        }
      >
    >


  export type WorldEntitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    entityType?: boolean
    name?: boolean
    description?: boolean
    content?: boolean
    embeddingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    world?: boolean | WorldDefaultArgs<ExtArgs>
    sourceRelationships?: boolean | WorldEntity$sourceRelationshipsArgs<ExtArgs>
    targetRelationships?: boolean | WorldEntity$targetRelationshipsArgs<ExtArgs>
    _count?: boolean | WorldEntityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worldEntity"]>

  export type WorldEntitySelectScalar = {
    id?: boolean
    worldId?: boolean
    entityType?: boolean
    name?: boolean
    description?: boolean
    content?: boolean
    embeddingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorldEntityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | WorldDefaultArgs<ExtArgs>
    sourceRelationships?: boolean | WorldEntity$sourceRelationshipsArgs<ExtArgs>
    targetRelationships?: boolean | WorldEntity$targetRelationshipsArgs<ExtArgs>
    _count?: boolean | WorldEntityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WorldEntityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorldEntity"
    objects: {
      world: Prisma.$WorldPayload<ExtArgs>
      sourceRelationships: Prisma.$EntityRelationshipPayload<ExtArgs>[]
      targetRelationships: Prisma.$EntityRelationshipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      worldId: string
      entityType: $Enums.EntityType
      name: string
      description: string | null
      content: Prisma.JsonValue | null
      embeddingId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["worldEntity"]>
    composites: {}
  }


  type WorldEntityGetPayload<S extends boolean | null | undefined | WorldEntityDefaultArgs> = $Result.GetResult<Prisma.$WorldEntityPayload, S>

  type WorldEntityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorldEntityFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: WorldEntityCountAggregateInputType | true
    }

  export interface WorldEntityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorldEntity'], meta: { name: 'WorldEntity' } }
    /**
     * Find zero or one WorldEntity that matches the filter.
     * @param {WorldEntityFindUniqueArgs} args - Arguments to find a WorldEntity
     * @example
     * // Get one WorldEntity
     * const worldEntity = await prisma.worldEntity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorldEntityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WorldEntityFindUniqueArgs<ExtArgs>>
    ): Prisma__WorldEntityClient<$Result.GetResult<Prisma.$WorldEntityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WorldEntity that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorldEntityFindUniqueOrThrowArgs} args - Arguments to find a WorldEntity
     * @example
     * // Get one WorldEntity
     * const worldEntity = await prisma.worldEntity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorldEntityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldEntityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WorldEntityClient<$Result.GetResult<Prisma.$WorldEntityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WorldEntity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldEntityFindFirstArgs} args - Arguments to find a WorldEntity
     * @example
     * // Get one WorldEntity
     * const worldEntity = await prisma.worldEntity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorldEntityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldEntityFindFirstArgs<ExtArgs>>
    ): Prisma__WorldEntityClient<$Result.GetResult<Prisma.$WorldEntityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WorldEntity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldEntityFindFirstOrThrowArgs} args - Arguments to find a WorldEntity
     * @example
     * // Get one WorldEntity
     * const worldEntity = await prisma.worldEntity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorldEntityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldEntityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WorldEntityClient<$Result.GetResult<Prisma.$WorldEntityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WorldEntities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldEntityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorldEntities
     * const worldEntities = await prisma.worldEntity.findMany()
     * 
     * // Get first 10 WorldEntities
     * const worldEntities = await prisma.worldEntity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worldEntityWithIdOnly = await prisma.worldEntity.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorldEntityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldEntityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldEntityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WorldEntity.
     * @param {WorldEntityCreateArgs} args - Arguments to create a WorldEntity.
     * @example
     * // Create one WorldEntity
     * const WorldEntity = await prisma.worldEntity.create({
     *   data: {
     *     // ... data to create a WorldEntity
     *   }
     * })
     * 
    **/
    create<T extends WorldEntityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WorldEntityCreateArgs<ExtArgs>>
    ): Prisma__WorldEntityClient<$Result.GetResult<Prisma.$WorldEntityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WorldEntities.
     *     @param {WorldEntityCreateManyArgs} args - Arguments to create many WorldEntities.
     *     @example
     *     // Create many WorldEntities
     *     const worldEntity = await prisma.worldEntity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorldEntityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldEntityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorldEntity.
     * @param {WorldEntityDeleteArgs} args - Arguments to delete one WorldEntity.
     * @example
     * // Delete one WorldEntity
     * const WorldEntity = await prisma.worldEntity.delete({
     *   where: {
     *     // ... filter to delete one WorldEntity
     *   }
     * })
     * 
    **/
    delete<T extends WorldEntityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WorldEntityDeleteArgs<ExtArgs>>
    ): Prisma__WorldEntityClient<$Result.GetResult<Prisma.$WorldEntityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WorldEntity.
     * @param {WorldEntityUpdateArgs} args - Arguments to update one WorldEntity.
     * @example
     * // Update one WorldEntity
     * const worldEntity = await prisma.worldEntity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorldEntityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WorldEntityUpdateArgs<ExtArgs>>
    ): Prisma__WorldEntityClient<$Result.GetResult<Prisma.$WorldEntityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WorldEntities.
     * @param {WorldEntityDeleteManyArgs} args - Arguments to filter WorldEntities to delete.
     * @example
     * // Delete a few WorldEntities
     * const { count } = await prisma.worldEntity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorldEntityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldEntityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorldEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldEntityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorldEntities
     * const worldEntity = await prisma.worldEntity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorldEntityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WorldEntityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorldEntity.
     * @param {WorldEntityUpsertArgs} args - Arguments to update or create a WorldEntity.
     * @example
     * // Update or create a WorldEntity
     * const worldEntity = await prisma.worldEntity.upsert({
     *   create: {
     *     // ... data to create a WorldEntity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorldEntity we want to update
     *   }
     * })
    **/
    upsert<T extends WorldEntityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WorldEntityUpsertArgs<ExtArgs>>
    ): Prisma__WorldEntityClient<$Result.GetResult<Prisma.$WorldEntityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WorldEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldEntityCountArgs} args - Arguments to filter WorldEntities to count.
     * @example
     * // Count the number of WorldEntities
     * const count = await prisma.worldEntity.count({
     *   where: {
     *     // ... the filter for the WorldEntities we want to count
     *   }
     * })
    **/
    count<T extends WorldEntityCountArgs>(
      args?: Subset<T, WorldEntityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorldEntityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorldEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldEntityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorldEntityAggregateArgs>(args: Subset<T, WorldEntityAggregateArgs>): Prisma.PrismaPromise<GetWorldEntityAggregateType<T>>

    /**
     * Group by WorldEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldEntityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorldEntityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorldEntityGroupByArgs['orderBy'] }
        : { orderBy?: WorldEntityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorldEntityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorldEntityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorldEntity model
   */
  readonly fields: WorldEntityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorldEntity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorldEntityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    world<T extends WorldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorldDefaultArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    sourceRelationships<T extends WorldEntity$sourceRelationshipsArgs<ExtArgs> = {}>(args?: Subset<T, WorldEntity$sourceRelationshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityRelationshipPayload<ExtArgs>, T, 'findMany'> | Null>;

    targetRelationships<T extends WorldEntity$targetRelationshipsArgs<ExtArgs> = {}>(args?: Subset<T, WorldEntity$targetRelationshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityRelationshipPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WorldEntity model
   */ 
  interface WorldEntityFieldRefs {
    readonly id: FieldRef<"WorldEntity", 'String'>
    readonly worldId: FieldRef<"WorldEntity", 'String'>
    readonly entityType: FieldRef<"WorldEntity", 'EntityType'>
    readonly name: FieldRef<"WorldEntity", 'String'>
    readonly description: FieldRef<"WorldEntity", 'String'>
    readonly content: FieldRef<"WorldEntity", 'Json'>
    readonly embeddingId: FieldRef<"WorldEntity", 'String'>
    readonly createdAt: FieldRef<"WorldEntity", 'DateTime'>
    readonly updatedAt: FieldRef<"WorldEntity", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * WorldEntity findUnique
   */
  export type WorldEntityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldEntity
     */
    select?: WorldEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldEntityInclude<ExtArgs> | null
    /**
     * Filter, which WorldEntity to fetch.
     */
    where: WorldEntityWhereUniqueInput
  }


  /**
   * WorldEntity findUniqueOrThrow
   */
  export type WorldEntityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldEntity
     */
    select?: WorldEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldEntityInclude<ExtArgs> | null
    /**
     * Filter, which WorldEntity to fetch.
     */
    where: WorldEntityWhereUniqueInput
  }


  /**
   * WorldEntity findFirst
   */
  export type WorldEntityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldEntity
     */
    select?: WorldEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldEntityInclude<ExtArgs> | null
    /**
     * Filter, which WorldEntity to fetch.
     */
    where?: WorldEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldEntities to fetch.
     */
    orderBy?: WorldEntityOrderByWithRelationInput | WorldEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldEntities.
     */
    cursor?: WorldEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldEntities.
     */
    distinct?: WorldEntityScalarFieldEnum | WorldEntityScalarFieldEnum[]
  }


  /**
   * WorldEntity findFirstOrThrow
   */
  export type WorldEntityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldEntity
     */
    select?: WorldEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldEntityInclude<ExtArgs> | null
    /**
     * Filter, which WorldEntity to fetch.
     */
    where?: WorldEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldEntities to fetch.
     */
    orderBy?: WorldEntityOrderByWithRelationInput | WorldEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldEntities.
     */
    cursor?: WorldEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldEntities.
     */
    distinct?: WorldEntityScalarFieldEnum | WorldEntityScalarFieldEnum[]
  }


  /**
   * WorldEntity findMany
   */
  export type WorldEntityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldEntity
     */
    select?: WorldEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldEntityInclude<ExtArgs> | null
    /**
     * Filter, which WorldEntities to fetch.
     */
    where?: WorldEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldEntities to fetch.
     */
    orderBy?: WorldEntityOrderByWithRelationInput | WorldEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorldEntities.
     */
    cursor?: WorldEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldEntities.
     */
    skip?: number
    distinct?: WorldEntityScalarFieldEnum | WorldEntityScalarFieldEnum[]
  }


  /**
   * WorldEntity create
   */
  export type WorldEntityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldEntity
     */
    select?: WorldEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldEntityInclude<ExtArgs> | null
    /**
     * The data needed to create a WorldEntity.
     */
    data: XOR<WorldEntityCreateInput, WorldEntityUncheckedCreateInput>
  }


  /**
   * WorldEntity createMany
   */
  export type WorldEntityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorldEntities.
     */
    data: WorldEntityCreateManyInput | WorldEntityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * WorldEntity update
   */
  export type WorldEntityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldEntity
     */
    select?: WorldEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldEntityInclude<ExtArgs> | null
    /**
     * The data needed to update a WorldEntity.
     */
    data: XOR<WorldEntityUpdateInput, WorldEntityUncheckedUpdateInput>
    /**
     * Choose, which WorldEntity to update.
     */
    where: WorldEntityWhereUniqueInput
  }


  /**
   * WorldEntity updateMany
   */
  export type WorldEntityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorldEntities.
     */
    data: XOR<WorldEntityUpdateManyMutationInput, WorldEntityUncheckedUpdateManyInput>
    /**
     * Filter which WorldEntities to update
     */
    where?: WorldEntityWhereInput
  }


  /**
   * WorldEntity upsert
   */
  export type WorldEntityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldEntity
     */
    select?: WorldEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldEntityInclude<ExtArgs> | null
    /**
     * The filter to search for the WorldEntity to update in case it exists.
     */
    where: WorldEntityWhereUniqueInput
    /**
     * In case the WorldEntity found by the `where` argument doesn't exist, create a new WorldEntity with this data.
     */
    create: XOR<WorldEntityCreateInput, WorldEntityUncheckedCreateInput>
    /**
     * In case the WorldEntity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorldEntityUpdateInput, WorldEntityUncheckedUpdateInput>
  }


  /**
   * WorldEntity delete
   */
  export type WorldEntityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldEntity
     */
    select?: WorldEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldEntityInclude<ExtArgs> | null
    /**
     * Filter which WorldEntity to delete.
     */
    where: WorldEntityWhereUniqueInput
  }


  /**
   * WorldEntity deleteMany
   */
  export type WorldEntityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorldEntities to delete
     */
    where?: WorldEntityWhereInput
  }


  /**
   * WorldEntity.sourceRelationships
   */
  export type WorldEntity$sourceRelationshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityRelationship
     */
    select?: EntityRelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntityRelationshipInclude<ExtArgs> | null
    where?: EntityRelationshipWhereInput
    orderBy?: EntityRelationshipOrderByWithRelationInput | EntityRelationshipOrderByWithRelationInput[]
    cursor?: EntityRelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntityRelationshipScalarFieldEnum | EntityRelationshipScalarFieldEnum[]
  }


  /**
   * WorldEntity.targetRelationships
   */
  export type WorldEntity$targetRelationshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityRelationship
     */
    select?: EntityRelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntityRelationshipInclude<ExtArgs> | null
    where?: EntityRelationshipWhereInput
    orderBy?: EntityRelationshipOrderByWithRelationInput | EntityRelationshipOrderByWithRelationInput[]
    cursor?: EntityRelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntityRelationshipScalarFieldEnum | EntityRelationshipScalarFieldEnum[]
  }


  /**
   * WorldEntity without action
   */
  export type WorldEntityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldEntity
     */
    select?: WorldEntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldEntityInclude<ExtArgs> | null
  }



  /**
   * Model EntityRelationship
   */

  export type AggregateEntityRelationship = {
    _count: EntityRelationshipCountAggregateOutputType | null
    _avg: EntityRelationshipAvgAggregateOutputType | null
    _sum: EntityRelationshipSumAggregateOutputType | null
    _min: EntityRelationshipMinAggregateOutputType | null
    _max: EntityRelationshipMaxAggregateOutputType | null
  }

  export type EntityRelationshipAvgAggregateOutputType = {
    strength: number | null
  }

  export type EntityRelationshipSumAggregateOutputType = {
    strength: number | null
  }

  export type EntityRelationshipMinAggregateOutputType = {
    id: string | null
    sourceEntityId: string | null
    targetEntityId: string | null
    worldId: string | null
    relationshipType: string | null
    strength: number | null
    description: string | null
    createdAt: Date | null
  }

  export type EntityRelationshipMaxAggregateOutputType = {
    id: string | null
    sourceEntityId: string | null
    targetEntityId: string | null
    worldId: string | null
    relationshipType: string | null
    strength: number | null
    description: string | null
    createdAt: Date | null
  }

  export type EntityRelationshipCountAggregateOutputType = {
    id: number
    sourceEntityId: number
    targetEntityId: number
    worldId: number
    relationshipType: number
    strength: number
    description: number
    createdAt: number
    _all: number
  }


  export type EntityRelationshipAvgAggregateInputType = {
    strength?: true
  }

  export type EntityRelationshipSumAggregateInputType = {
    strength?: true
  }

  export type EntityRelationshipMinAggregateInputType = {
    id?: true
    sourceEntityId?: true
    targetEntityId?: true
    worldId?: true
    relationshipType?: true
    strength?: true
    description?: true
    createdAt?: true
  }

  export type EntityRelationshipMaxAggregateInputType = {
    id?: true
    sourceEntityId?: true
    targetEntityId?: true
    worldId?: true
    relationshipType?: true
    strength?: true
    description?: true
    createdAt?: true
  }

  export type EntityRelationshipCountAggregateInputType = {
    id?: true
    sourceEntityId?: true
    targetEntityId?: true
    worldId?: true
    relationshipType?: true
    strength?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type EntityRelationshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntityRelationship to aggregate.
     */
    where?: EntityRelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntityRelationships to fetch.
     */
    orderBy?: EntityRelationshipOrderByWithRelationInput | EntityRelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntityRelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntityRelationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntityRelationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EntityRelationships
    **/
    _count?: true | EntityRelationshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntityRelationshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntityRelationshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntityRelationshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntityRelationshipMaxAggregateInputType
  }

  export type GetEntityRelationshipAggregateType<T extends EntityRelationshipAggregateArgs> = {
        [P in keyof T & keyof AggregateEntityRelationship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntityRelationship[P]>
      : GetScalarType<T[P], AggregateEntityRelationship[P]>
  }




  export type EntityRelationshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntityRelationshipWhereInput
    orderBy?: EntityRelationshipOrderByWithAggregationInput | EntityRelationshipOrderByWithAggregationInput[]
    by: EntityRelationshipScalarFieldEnum[] | EntityRelationshipScalarFieldEnum
    having?: EntityRelationshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntityRelationshipCountAggregateInputType | true
    _avg?: EntityRelationshipAvgAggregateInputType
    _sum?: EntityRelationshipSumAggregateInputType
    _min?: EntityRelationshipMinAggregateInputType
    _max?: EntityRelationshipMaxAggregateInputType
  }

  export type EntityRelationshipGroupByOutputType = {
    id: string
    sourceEntityId: string
    targetEntityId: string
    worldId: string
    relationshipType: string
    strength: number | null
    description: string | null
    createdAt: Date
    _count: EntityRelationshipCountAggregateOutputType | null
    _avg: EntityRelationshipAvgAggregateOutputType | null
    _sum: EntityRelationshipSumAggregateOutputType | null
    _min: EntityRelationshipMinAggregateOutputType | null
    _max: EntityRelationshipMaxAggregateOutputType | null
  }

  type GetEntityRelationshipGroupByPayload<T extends EntityRelationshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntityRelationshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntityRelationshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntityRelationshipGroupByOutputType[P]>
            : GetScalarType<T[P], EntityRelationshipGroupByOutputType[P]>
        }
      >
    >


  export type EntityRelationshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceEntityId?: boolean
    targetEntityId?: boolean
    worldId?: boolean
    relationshipType?: boolean
    strength?: boolean
    description?: boolean
    createdAt?: boolean
    sourceEntity?: boolean | WorldEntityDefaultArgs<ExtArgs>
    targetEntity?: boolean | WorldEntityDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entityRelationship"]>

  export type EntityRelationshipSelectScalar = {
    id?: boolean
    sourceEntityId?: boolean
    targetEntityId?: boolean
    worldId?: boolean
    relationshipType?: boolean
    strength?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type EntityRelationshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceEntity?: boolean | WorldEntityDefaultArgs<ExtArgs>
    targetEntity?: boolean | WorldEntityDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }


  export type $EntityRelationshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EntityRelationship"
    objects: {
      sourceEntity: Prisma.$WorldEntityPayload<ExtArgs>
      targetEntity: Prisma.$WorldEntityPayload<ExtArgs>
      world: Prisma.$WorldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceEntityId: string
      targetEntityId: string
      worldId: string
      relationshipType: string
      strength: number | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["entityRelationship"]>
    composites: {}
  }


  type EntityRelationshipGetPayload<S extends boolean | null | undefined | EntityRelationshipDefaultArgs> = $Result.GetResult<Prisma.$EntityRelationshipPayload, S>

  type EntityRelationshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EntityRelationshipFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: EntityRelationshipCountAggregateInputType | true
    }

  export interface EntityRelationshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EntityRelationship'], meta: { name: 'EntityRelationship' } }
    /**
     * Find zero or one EntityRelationship that matches the filter.
     * @param {EntityRelationshipFindUniqueArgs} args - Arguments to find a EntityRelationship
     * @example
     * // Get one EntityRelationship
     * const entityRelationship = await prisma.entityRelationship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EntityRelationshipFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EntityRelationshipFindUniqueArgs<ExtArgs>>
    ): Prisma__EntityRelationshipClient<$Result.GetResult<Prisma.$EntityRelationshipPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one EntityRelationship that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EntityRelationshipFindUniqueOrThrowArgs} args - Arguments to find a EntityRelationship
     * @example
     * // Get one EntityRelationship
     * const entityRelationship = await prisma.entityRelationship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EntityRelationshipFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityRelationshipFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EntityRelationshipClient<$Result.GetResult<Prisma.$EntityRelationshipPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first EntityRelationship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityRelationshipFindFirstArgs} args - Arguments to find a EntityRelationship
     * @example
     * // Get one EntityRelationship
     * const entityRelationship = await prisma.entityRelationship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EntityRelationshipFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityRelationshipFindFirstArgs<ExtArgs>>
    ): Prisma__EntityRelationshipClient<$Result.GetResult<Prisma.$EntityRelationshipPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first EntityRelationship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityRelationshipFindFirstOrThrowArgs} args - Arguments to find a EntityRelationship
     * @example
     * // Get one EntityRelationship
     * const entityRelationship = await prisma.entityRelationship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EntityRelationshipFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityRelationshipFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EntityRelationshipClient<$Result.GetResult<Prisma.$EntityRelationshipPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more EntityRelationships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityRelationshipFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EntityRelationships
     * const entityRelationships = await prisma.entityRelationship.findMany()
     * 
     * // Get first 10 EntityRelationships
     * const entityRelationships = await prisma.entityRelationship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entityRelationshipWithIdOnly = await prisma.entityRelationship.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EntityRelationshipFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityRelationshipFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityRelationshipPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a EntityRelationship.
     * @param {EntityRelationshipCreateArgs} args - Arguments to create a EntityRelationship.
     * @example
     * // Create one EntityRelationship
     * const EntityRelationship = await prisma.entityRelationship.create({
     *   data: {
     *     // ... data to create a EntityRelationship
     *   }
     * })
     * 
    **/
    create<T extends EntityRelationshipCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EntityRelationshipCreateArgs<ExtArgs>>
    ): Prisma__EntityRelationshipClient<$Result.GetResult<Prisma.$EntityRelationshipPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many EntityRelationships.
     *     @param {EntityRelationshipCreateManyArgs} args - Arguments to create many EntityRelationships.
     *     @example
     *     // Create many EntityRelationships
     *     const entityRelationship = await prisma.entityRelationship.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EntityRelationshipCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityRelationshipCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EntityRelationship.
     * @param {EntityRelationshipDeleteArgs} args - Arguments to delete one EntityRelationship.
     * @example
     * // Delete one EntityRelationship
     * const EntityRelationship = await prisma.entityRelationship.delete({
     *   where: {
     *     // ... filter to delete one EntityRelationship
     *   }
     * })
     * 
    **/
    delete<T extends EntityRelationshipDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EntityRelationshipDeleteArgs<ExtArgs>>
    ): Prisma__EntityRelationshipClient<$Result.GetResult<Prisma.$EntityRelationshipPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one EntityRelationship.
     * @param {EntityRelationshipUpdateArgs} args - Arguments to update one EntityRelationship.
     * @example
     * // Update one EntityRelationship
     * const entityRelationship = await prisma.entityRelationship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EntityRelationshipUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EntityRelationshipUpdateArgs<ExtArgs>>
    ): Prisma__EntityRelationshipClient<$Result.GetResult<Prisma.$EntityRelationshipPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more EntityRelationships.
     * @param {EntityRelationshipDeleteManyArgs} args - Arguments to filter EntityRelationships to delete.
     * @example
     * // Delete a few EntityRelationships
     * const { count } = await prisma.entityRelationship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EntityRelationshipDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityRelationshipDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EntityRelationships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityRelationshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EntityRelationships
     * const entityRelationship = await prisma.entityRelationship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EntityRelationshipUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EntityRelationshipUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EntityRelationship.
     * @param {EntityRelationshipUpsertArgs} args - Arguments to update or create a EntityRelationship.
     * @example
     * // Update or create a EntityRelationship
     * const entityRelationship = await prisma.entityRelationship.upsert({
     *   create: {
     *     // ... data to create a EntityRelationship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EntityRelationship we want to update
     *   }
     * })
    **/
    upsert<T extends EntityRelationshipUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EntityRelationshipUpsertArgs<ExtArgs>>
    ): Prisma__EntityRelationshipClient<$Result.GetResult<Prisma.$EntityRelationshipPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of EntityRelationships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityRelationshipCountArgs} args - Arguments to filter EntityRelationships to count.
     * @example
     * // Count the number of EntityRelationships
     * const count = await prisma.entityRelationship.count({
     *   where: {
     *     // ... the filter for the EntityRelationships we want to count
     *   }
     * })
    **/
    count<T extends EntityRelationshipCountArgs>(
      args?: Subset<T, EntityRelationshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntityRelationshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EntityRelationship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityRelationshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntityRelationshipAggregateArgs>(args: Subset<T, EntityRelationshipAggregateArgs>): Prisma.PrismaPromise<GetEntityRelationshipAggregateType<T>>

    /**
     * Group by EntityRelationship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityRelationshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntityRelationshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntityRelationshipGroupByArgs['orderBy'] }
        : { orderBy?: EntityRelationshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntityRelationshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntityRelationshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EntityRelationship model
   */
  readonly fields: EntityRelationshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EntityRelationship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntityRelationshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sourceEntity<T extends WorldEntityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorldEntityDefaultArgs<ExtArgs>>): Prisma__WorldEntityClient<$Result.GetResult<Prisma.$WorldEntityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    targetEntity<T extends WorldEntityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorldEntityDefaultArgs<ExtArgs>>): Prisma__WorldEntityClient<$Result.GetResult<Prisma.$WorldEntityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    world<T extends WorldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorldDefaultArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the EntityRelationship model
   */ 
  interface EntityRelationshipFieldRefs {
    readonly id: FieldRef<"EntityRelationship", 'String'>
    readonly sourceEntityId: FieldRef<"EntityRelationship", 'String'>
    readonly targetEntityId: FieldRef<"EntityRelationship", 'String'>
    readonly worldId: FieldRef<"EntityRelationship", 'String'>
    readonly relationshipType: FieldRef<"EntityRelationship", 'String'>
    readonly strength: FieldRef<"EntityRelationship", 'Float'>
    readonly description: FieldRef<"EntityRelationship", 'String'>
    readonly createdAt: FieldRef<"EntityRelationship", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * EntityRelationship findUnique
   */
  export type EntityRelationshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityRelationship
     */
    select?: EntityRelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntityRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which EntityRelationship to fetch.
     */
    where: EntityRelationshipWhereUniqueInput
  }


  /**
   * EntityRelationship findUniqueOrThrow
   */
  export type EntityRelationshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityRelationship
     */
    select?: EntityRelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntityRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which EntityRelationship to fetch.
     */
    where: EntityRelationshipWhereUniqueInput
  }


  /**
   * EntityRelationship findFirst
   */
  export type EntityRelationshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityRelationship
     */
    select?: EntityRelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntityRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which EntityRelationship to fetch.
     */
    where?: EntityRelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntityRelationships to fetch.
     */
    orderBy?: EntityRelationshipOrderByWithRelationInput | EntityRelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntityRelationships.
     */
    cursor?: EntityRelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntityRelationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntityRelationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntityRelationships.
     */
    distinct?: EntityRelationshipScalarFieldEnum | EntityRelationshipScalarFieldEnum[]
  }


  /**
   * EntityRelationship findFirstOrThrow
   */
  export type EntityRelationshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityRelationship
     */
    select?: EntityRelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntityRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which EntityRelationship to fetch.
     */
    where?: EntityRelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntityRelationships to fetch.
     */
    orderBy?: EntityRelationshipOrderByWithRelationInput | EntityRelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntityRelationships.
     */
    cursor?: EntityRelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntityRelationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntityRelationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntityRelationships.
     */
    distinct?: EntityRelationshipScalarFieldEnum | EntityRelationshipScalarFieldEnum[]
  }


  /**
   * EntityRelationship findMany
   */
  export type EntityRelationshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityRelationship
     */
    select?: EntityRelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntityRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which EntityRelationships to fetch.
     */
    where?: EntityRelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntityRelationships to fetch.
     */
    orderBy?: EntityRelationshipOrderByWithRelationInput | EntityRelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EntityRelationships.
     */
    cursor?: EntityRelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntityRelationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntityRelationships.
     */
    skip?: number
    distinct?: EntityRelationshipScalarFieldEnum | EntityRelationshipScalarFieldEnum[]
  }


  /**
   * EntityRelationship create
   */
  export type EntityRelationshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityRelationship
     */
    select?: EntityRelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntityRelationshipInclude<ExtArgs> | null
    /**
     * The data needed to create a EntityRelationship.
     */
    data: XOR<EntityRelationshipCreateInput, EntityRelationshipUncheckedCreateInput>
  }


  /**
   * EntityRelationship createMany
   */
  export type EntityRelationshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EntityRelationships.
     */
    data: EntityRelationshipCreateManyInput | EntityRelationshipCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * EntityRelationship update
   */
  export type EntityRelationshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityRelationship
     */
    select?: EntityRelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntityRelationshipInclude<ExtArgs> | null
    /**
     * The data needed to update a EntityRelationship.
     */
    data: XOR<EntityRelationshipUpdateInput, EntityRelationshipUncheckedUpdateInput>
    /**
     * Choose, which EntityRelationship to update.
     */
    where: EntityRelationshipWhereUniqueInput
  }


  /**
   * EntityRelationship updateMany
   */
  export type EntityRelationshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EntityRelationships.
     */
    data: XOR<EntityRelationshipUpdateManyMutationInput, EntityRelationshipUncheckedUpdateManyInput>
    /**
     * Filter which EntityRelationships to update
     */
    where?: EntityRelationshipWhereInput
  }


  /**
   * EntityRelationship upsert
   */
  export type EntityRelationshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityRelationship
     */
    select?: EntityRelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntityRelationshipInclude<ExtArgs> | null
    /**
     * The filter to search for the EntityRelationship to update in case it exists.
     */
    where: EntityRelationshipWhereUniqueInput
    /**
     * In case the EntityRelationship found by the `where` argument doesn't exist, create a new EntityRelationship with this data.
     */
    create: XOR<EntityRelationshipCreateInput, EntityRelationshipUncheckedCreateInput>
    /**
     * In case the EntityRelationship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntityRelationshipUpdateInput, EntityRelationshipUncheckedUpdateInput>
  }


  /**
   * EntityRelationship delete
   */
  export type EntityRelationshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityRelationship
     */
    select?: EntityRelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntityRelationshipInclude<ExtArgs> | null
    /**
     * Filter which EntityRelationship to delete.
     */
    where: EntityRelationshipWhereUniqueInput
  }


  /**
   * EntityRelationship deleteMany
   */
  export type EntityRelationshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntityRelationships to delete
     */
    where?: EntityRelationshipWhereInput
  }


  /**
   * EntityRelationship without action
   */
  export type EntityRelationshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityRelationship
     */
    select?: EntityRelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EntityRelationshipInclude<ExtArgs> | null
  }



  /**
   * Model WorldContent
   */

  export type AggregateWorldContent = {
    _count: WorldContentCountAggregateOutputType | null
    _min: WorldContentMinAggregateOutputType | null
    _max: WorldContentMaxAggregateOutputType | null
  }

  export type WorldContentMinAggregateOutputType = {
    id: string | null
    worldId: string | null
    contentType: $Enums.ContentType | null
    title: string | null
    content: string | null
    embeddingId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorldContentMaxAggregateOutputType = {
    id: string | null
    worldId: string | null
    contentType: $Enums.ContentType | null
    title: string | null
    content: string | null
    embeddingId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorldContentCountAggregateOutputType = {
    id: number
    worldId: number
    contentType: number
    title: number
    content: number
    tags: number
    embeddingId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorldContentMinAggregateInputType = {
    id?: true
    worldId?: true
    contentType?: true
    title?: true
    content?: true
    embeddingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorldContentMaxAggregateInputType = {
    id?: true
    worldId?: true
    contentType?: true
    title?: true
    content?: true
    embeddingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorldContentCountAggregateInputType = {
    id?: true
    worldId?: true
    contentType?: true
    title?: true
    content?: true
    tags?: true
    embeddingId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorldContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorldContent to aggregate.
     */
    where?: WorldContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldContents to fetch.
     */
    orderBy?: WorldContentOrderByWithRelationInput | WorldContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorldContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorldContents
    **/
    _count?: true | WorldContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorldContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorldContentMaxAggregateInputType
  }

  export type GetWorldContentAggregateType<T extends WorldContentAggregateArgs> = {
        [P in keyof T & keyof AggregateWorldContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorldContent[P]>
      : GetScalarType<T[P], AggregateWorldContent[P]>
  }




  export type WorldContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldContentWhereInput
    orderBy?: WorldContentOrderByWithAggregationInput | WorldContentOrderByWithAggregationInput[]
    by: WorldContentScalarFieldEnum[] | WorldContentScalarFieldEnum
    having?: WorldContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorldContentCountAggregateInputType | true
    _min?: WorldContentMinAggregateInputType
    _max?: WorldContentMaxAggregateInputType
  }

  export type WorldContentGroupByOutputType = {
    id: string
    worldId: string
    contentType: $Enums.ContentType
    title: string | null
    content: string
    tags: string[]
    embeddingId: string | null
    createdAt: Date
    updatedAt: Date
    _count: WorldContentCountAggregateOutputType | null
    _min: WorldContentMinAggregateOutputType | null
    _max: WorldContentMaxAggregateOutputType | null
  }

  type GetWorldContentGroupByPayload<T extends WorldContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorldContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorldContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorldContentGroupByOutputType[P]>
            : GetScalarType<T[P], WorldContentGroupByOutputType[P]>
        }
      >
    >


  export type WorldContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    contentType?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    embeddingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worldContent"]>

  export type WorldContentSelectScalar = {
    id?: boolean
    worldId?: boolean
    contentType?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    embeddingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorldContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }


  export type $WorldContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorldContent"
    objects: {
      world: Prisma.$WorldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      worldId: string
      contentType: $Enums.ContentType
      title: string | null
      content: string
      tags: string[]
      embeddingId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["worldContent"]>
    composites: {}
  }


  type WorldContentGetPayload<S extends boolean | null | undefined | WorldContentDefaultArgs> = $Result.GetResult<Prisma.$WorldContentPayload, S>

  type WorldContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorldContentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: WorldContentCountAggregateInputType | true
    }

  export interface WorldContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorldContent'], meta: { name: 'WorldContent' } }
    /**
     * Find zero or one WorldContent that matches the filter.
     * @param {WorldContentFindUniqueArgs} args - Arguments to find a WorldContent
     * @example
     * // Get one WorldContent
     * const worldContent = await prisma.worldContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorldContentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WorldContentFindUniqueArgs<ExtArgs>>
    ): Prisma__WorldContentClient<$Result.GetResult<Prisma.$WorldContentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WorldContent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorldContentFindUniqueOrThrowArgs} args - Arguments to find a WorldContent
     * @example
     * // Get one WorldContent
     * const worldContent = await prisma.worldContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorldContentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldContentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WorldContentClient<$Result.GetResult<Prisma.$WorldContentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WorldContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldContentFindFirstArgs} args - Arguments to find a WorldContent
     * @example
     * // Get one WorldContent
     * const worldContent = await prisma.worldContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorldContentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldContentFindFirstArgs<ExtArgs>>
    ): Prisma__WorldContentClient<$Result.GetResult<Prisma.$WorldContentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WorldContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldContentFindFirstOrThrowArgs} args - Arguments to find a WorldContent
     * @example
     * // Get one WorldContent
     * const worldContent = await prisma.worldContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorldContentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldContentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WorldContentClient<$Result.GetResult<Prisma.$WorldContentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WorldContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldContentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorldContents
     * const worldContents = await prisma.worldContent.findMany()
     * 
     * // Get first 10 WorldContents
     * const worldContents = await prisma.worldContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worldContentWithIdOnly = await prisma.worldContent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorldContentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldContentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldContentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WorldContent.
     * @param {WorldContentCreateArgs} args - Arguments to create a WorldContent.
     * @example
     * // Create one WorldContent
     * const WorldContent = await prisma.worldContent.create({
     *   data: {
     *     // ... data to create a WorldContent
     *   }
     * })
     * 
    **/
    create<T extends WorldContentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WorldContentCreateArgs<ExtArgs>>
    ): Prisma__WorldContentClient<$Result.GetResult<Prisma.$WorldContentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WorldContents.
     *     @param {WorldContentCreateManyArgs} args - Arguments to create many WorldContents.
     *     @example
     *     // Create many WorldContents
     *     const worldContent = await prisma.worldContent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorldContentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldContentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorldContent.
     * @param {WorldContentDeleteArgs} args - Arguments to delete one WorldContent.
     * @example
     * // Delete one WorldContent
     * const WorldContent = await prisma.worldContent.delete({
     *   where: {
     *     // ... filter to delete one WorldContent
     *   }
     * })
     * 
    **/
    delete<T extends WorldContentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WorldContentDeleteArgs<ExtArgs>>
    ): Prisma__WorldContentClient<$Result.GetResult<Prisma.$WorldContentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WorldContent.
     * @param {WorldContentUpdateArgs} args - Arguments to update one WorldContent.
     * @example
     * // Update one WorldContent
     * const worldContent = await prisma.worldContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorldContentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WorldContentUpdateArgs<ExtArgs>>
    ): Prisma__WorldContentClient<$Result.GetResult<Prisma.$WorldContentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WorldContents.
     * @param {WorldContentDeleteManyArgs} args - Arguments to filter WorldContents to delete.
     * @example
     * // Delete a few WorldContents
     * const { count } = await prisma.worldContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorldContentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WorldContentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorldContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorldContents
     * const worldContent = await prisma.worldContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorldContentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WorldContentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorldContent.
     * @param {WorldContentUpsertArgs} args - Arguments to update or create a WorldContent.
     * @example
     * // Update or create a WorldContent
     * const worldContent = await prisma.worldContent.upsert({
     *   create: {
     *     // ... data to create a WorldContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorldContent we want to update
     *   }
     * })
    **/
    upsert<T extends WorldContentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WorldContentUpsertArgs<ExtArgs>>
    ): Prisma__WorldContentClient<$Result.GetResult<Prisma.$WorldContentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WorldContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldContentCountArgs} args - Arguments to filter WorldContents to count.
     * @example
     * // Count the number of WorldContents
     * const count = await prisma.worldContent.count({
     *   where: {
     *     // ... the filter for the WorldContents we want to count
     *   }
     * })
    **/
    count<T extends WorldContentCountArgs>(
      args?: Subset<T, WorldContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorldContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorldContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorldContentAggregateArgs>(args: Subset<T, WorldContentAggregateArgs>): Prisma.PrismaPromise<GetWorldContentAggregateType<T>>

    /**
     * Group by WorldContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorldContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorldContentGroupByArgs['orderBy'] }
        : { orderBy?: WorldContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorldContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorldContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorldContent model
   */
  readonly fields: WorldContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorldContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorldContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    world<T extends WorldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorldDefaultArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WorldContent model
   */ 
  interface WorldContentFieldRefs {
    readonly id: FieldRef<"WorldContent", 'String'>
    readonly worldId: FieldRef<"WorldContent", 'String'>
    readonly contentType: FieldRef<"WorldContent", 'ContentType'>
    readonly title: FieldRef<"WorldContent", 'String'>
    readonly content: FieldRef<"WorldContent", 'String'>
    readonly tags: FieldRef<"WorldContent", 'String[]'>
    readonly embeddingId: FieldRef<"WorldContent", 'String'>
    readonly createdAt: FieldRef<"WorldContent", 'DateTime'>
    readonly updatedAt: FieldRef<"WorldContent", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * WorldContent findUnique
   */
  export type WorldContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldContent
     */
    select?: WorldContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldContentInclude<ExtArgs> | null
    /**
     * Filter, which WorldContent to fetch.
     */
    where: WorldContentWhereUniqueInput
  }


  /**
   * WorldContent findUniqueOrThrow
   */
  export type WorldContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldContent
     */
    select?: WorldContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldContentInclude<ExtArgs> | null
    /**
     * Filter, which WorldContent to fetch.
     */
    where: WorldContentWhereUniqueInput
  }


  /**
   * WorldContent findFirst
   */
  export type WorldContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldContent
     */
    select?: WorldContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldContentInclude<ExtArgs> | null
    /**
     * Filter, which WorldContent to fetch.
     */
    where?: WorldContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldContents to fetch.
     */
    orderBy?: WorldContentOrderByWithRelationInput | WorldContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldContents.
     */
    cursor?: WorldContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldContents.
     */
    distinct?: WorldContentScalarFieldEnum | WorldContentScalarFieldEnum[]
  }


  /**
   * WorldContent findFirstOrThrow
   */
  export type WorldContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldContent
     */
    select?: WorldContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldContentInclude<ExtArgs> | null
    /**
     * Filter, which WorldContent to fetch.
     */
    where?: WorldContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldContents to fetch.
     */
    orderBy?: WorldContentOrderByWithRelationInput | WorldContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldContents.
     */
    cursor?: WorldContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldContents.
     */
    distinct?: WorldContentScalarFieldEnum | WorldContentScalarFieldEnum[]
  }


  /**
   * WorldContent findMany
   */
  export type WorldContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldContent
     */
    select?: WorldContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldContentInclude<ExtArgs> | null
    /**
     * Filter, which WorldContents to fetch.
     */
    where?: WorldContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldContents to fetch.
     */
    orderBy?: WorldContentOrderByWithRelationInput | WorldContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorldContents.
     */
    cursor?: WorldContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldContents.
     */
    skip?: number
    distinct?: WorldContentScalarFieldEnum | WorldContentScalarFieldEnum[]
  }


  /**
   * WorldContent create
   */
  export type WorldContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldContent
     */
    select?: WorldContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldContentInclude<ExtArgs> | null
    /**
     * The data needed to create a WorldContent.
     */
    data: XOR<WorldContentCreateInput, WorldContentUncheckedCreateInput>
  }


  /**
   * WorldContent createMany
   */
  export type WorldContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorldContents.
     */
    data: WorldContentCreateManyInput | WorldContentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * WorldContent update
   */
  export type WorldContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldContent
     */
    select?: WorldContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldContentInclude<ExtArgs> | null
    /**
     * The data needed to update a WorldContent.
     */
    data: XOR<WorldContentUpdateInput, WorldContentUncheckedUpdateInput>
    /**
     * Choose, which WorldContent to update.
     */
    where: WorldContentWhereUniqueInput
  }


  /**
   * WorldContent updateMany
   */
  export type WorldContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorldContents.
     */
    data: XOR<WorldContentUpdateManyMutationInput, WorldContentUncheckedUpdateManyInput>
    /**
     * Filter which WorldContents to update
     */
    where?: WorldContentWhereInput
  }


  /**
   * WorldContent upsert
   */
  export type WorldContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldContent
     */
    select?: WorldContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldContentInclude<ExtArgs> | null
    /**
     * The filter to search for the WorldContent to update in case it exists.
     */
    where: WorldContentWhereUniqueInput
    /**
     * In case the WorldContent found by the `where` argument doesn't exist, create a new WorldContent with this data.
     */
    create: XOR<WorldContentCreateInput, WorldContentUncheckedCreateInput>
    /**
     * In case the WorldContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorldContentUpdateInput, WorldContentUncheckedUpdateInput>
  }


  /**
   * WorldContent delete
   */
  export type WorldContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldContent
     */
    select?: WorldContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldContentInclude<ExtArgs> | null
    /**
     * Filter which WorldContent to delete.
     */
    where: WorldContentWhereUniqueInput
  }


  /**
   * WorldContent deleteMany
   */
  export type WorldContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorldContents to delete
     */
    where?: WorldContentWhereInput
  }


  /**
   * WorldContent without action
   */
  export type WorldContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldContent
     */
    select?: WorldContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorldContentInclude<ExtArgs> | null
  }



  /**
   * Model NotificationPreferences
   */

  export type AggregateNotificationPreferences = {
    _count: NotificationPreferencesCountAggregateOutputType | null
    _min: NotificationPreferencesMinAggregateOutputType | null
    _max: NotificationPreferencesMaxAggregateOutputType | null
  }

  export type NotificationPreferencesMinAggregateOutputType = {
    id: string | null
    userProfileId: string | null
    interventions: boolean | null
    celebrations: boolean | null
    suggestions: boolean | null
    email: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationPreferencesMaxAggregateOutputType = {
    id: string | null
    userProfileId: string | null
    interventions: boolean | null
    celebrations: boolean | null
    suggestions: boolean | null
    email: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationPreferencesCountAggregateOutputType = {
    id: number
    userProfileId: number
    interventions: number
    celebrations: number
    suggestions: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationPreferencesMinAggregateInputType = {
    id?: true
    userProfileId?: true
    interventions?: true
    celebrations?: true
    suggestions?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationPreferencesMaxAggregateInputType = {
    id?: true
    userProfileId?: true
    interventions?: true
    celebrations?: true
    suggestions?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationPreferencesCountAggregateInputType = {
    id?: true
    userProfileId?: true
    interventions?: true
    celebrations?: true
    suggestions?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationPreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationPreferences to aggregate.
     */
    where?: NotificationPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationPreferences to fetch.
     */
    orderBy?: NotificationPreferencesOrderByWithRelationInput | NotificationPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationPreferences
    **/
    _count?: true | NotificationPreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationPreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationPreferencesMaxAggregateInputType
  }

  export type GetNotificationPreferencesAggregateType<T extends NotificationPreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationPreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationPreferences[P]>
      : GetScalarType<T[P], AggregateNotificationPreferences[P]>
  }




  export type NotificationPreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationPreferencesWhereInput
    orderBy?: NotificationPreferencesOrderByWithAggregationInput | NotificationPreferencesOrderByWithAggregationInput[]
    by: NotificationPreferencesScalarFieldEnum[] | NotificationPreferencesScalarFieldEnum
    having?: NotificationPreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationPreferencesCountAggregateInputType | true
    _min?: NotificationPreferencesMinAggregateInputType
    _max?: NotificationPreferencesMaxAggregateInputType
  }

  export type NotificationPreferencesGroupByOutputType = {
    id: string
    userProfileId: string
    interventions: boolean
    celebrations: boolean
    suggestions: boolean
    email: boolean
    createdAt: Date
    updatedAt: Date
    _count: NotificationPreferencesCountAggregateOutputType | null
    _min: NotificationPreferencesMinAggregateOutputType | null
    _max: NotificationPreferencesMaxAggregateOutputType | null
  }

  type GetNotificationPreferencesGroupByPayload<T extends NotificationPreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationPreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationPreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationPreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationPreferencesGroupByOutputType[P]>
        }
      >
    >


  export type NotificationPreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userProfileId?: boolean
    interventions?: boolean
    celebrations?: boolean
    suggestions?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationPreferences"]>

  export type NotificationPreferencesSelectScalar = {
    id?: boolean
    userProfileId?: boolean
    interventions?: boolean
    celebrations?: boolean
    suggestions?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationPreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }


  export type $NotificationPreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationPreferences"
    objects: {
      userProfile: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userProfileId: string
      interventions: boolean
      celebrations: boolean
      suggestions: boolean
      email: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notificationPreferences"]>
    composites: {}
  }


  type NotificationPreferencesGetPayload<S extends boolean | null | undefined | NotificationPreferencesDefaultArgs> = $Result.GetResult<Prisma.$NotificationPreferencesPayload, S>

  type NotificationPreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationPreferencesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: NotificationPreferencesCountAggregateInputType | true
    }

  export interface NotificationPreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationPreferences'], meta: { name: 'NotificationPreferences' } }
    /**
     * Find zero or one NotificationPreferences that matches the filter.
     * @param {NotificationPreferencesFindUniqueArgs} args - Arguments to find a NotificationPreferences
     * @example
     * // Get one NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificationPreferencesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationPreferencesFindUniqueArgs<ExtArgs>>
    ): Prisma__NotificationPreferencesClient<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one NotificationPreferences that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotificationPreferencesFindUniqueOrThrowArgs} args - Arguments to find a NotificationPreferences
     * @example
     * // Get one NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotificationPreferencesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationPreferencesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationPreferencesClient<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first NotificationPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferencesFindFirstArgs} args - Arguments to find a NotificationPreferences
     * @example
     * // Get one NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificationPreferencesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationPreferencesFindFirstArgs<ExtArgs>>
    ): Prisma__NotificationPreferencesClient<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first NotificationPreferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferencesFindFirstOrThrowArgs} args - Arguments to find a NotificationPreferences
     * @example
     * // Get one NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotificationPreferencesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationPreferencesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationPreferencesClient<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more NotificationPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferencesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.findMany()
     * 
     * // Get first 10 NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationPreferencesWithIdOnly = await prisma.notificationPreferences.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotificationPreferencesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationPreferencesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a NotificationPreferences.
     * @param {NotificationPreferencesCreateArgs} args - Arguments to create a NotificationPreferences.
     * @example
     * // Create one NotificationPreferences
     * const NotificationPreferences = await prisma.notificationPreferences.create({
     *   data: {
     *     // ... data to create a NotificationPreferences
     *   }
     * })
     * 
    **/
    create<T extends NotificationPreferencesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationPreferencesCreateArgs<ExtArgs>>
    ): Prisma__NotificationPreferencesClient<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many NotificationPreferences.
     *     @param {NotificationPreferencesCreateManyArgs} args - Arguments to create many NotificationPreferences.
     *     @example
     *     // Create many NotificationPreferences
     *     const notificationPreferences = await prisma.notificationPreferences.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotificationPreferencesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationPreferencesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NotificationPreferences.
     * @param {NotificationPreferencesDeleteArgs} args - Arguments to delete one NotificationPreferences.
     * @example
     * // Delete one NotificationPreferences
     * const NotificationPreferences = await prisma.notificationPreferences.delete({
     *   where: {
     *     // ... filter to delete one NotificationPreferences
     *   }
     * })
     * 
    **/
    delete<T extends NotificationPreferencesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationPreferencesDeleteArgs<ExtArgs>>
    ): Prisma__NotificationPreferencesClient<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one NotificationPreferences.
     * @param {NotificationPreferencesUpdateArgs} args - Arguments to update one NotificationPreferences.
     * @example
     * // Update one NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificationPreferencesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationPreferencesUpdateArgs<ExtArgs>>
    ): Prisma__NotificationPreferencesClient<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more NotificationPreferences.
     * @param {NotificationPreferencesDeleteManyArgs} args - Arguments to filter NotificationPreferences to delete.
     * @example
     * // Delete a few NotificationPreferences
     * const { count } = await prisma.notificationPreferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificationPreferencesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationPreferencesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificationPreferencesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationPreferencesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationPreferences.
     * @param {NotificationPreferencesUpsertArgs} args - Arguments to update or create a NotificationPreferences.
     * @example
     * // Update or create a NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.upsert({
     *   create: {
     *     // ... data to create a NotificationPreferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationPreferences we want to update
     *   }
     * })
    **/
    upsert<T extends NotificationPreferencesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationPreferencesUpsertArgs<ExtArgs>>
    ): Prisma__NotificationPreferencesClient<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of NotificationPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferencesCountArgs} args - Arguments to filter NotificationPreferences to count.
     * @example
     * // Count the number of NotificationPreferences
     * const count = await prisma.notificationPreferences.count({
     *   where: {
     *     // ... the filter for the NotificationPreferences we want to count
     *   }
     * })
    **/
    count<T extends NotificationPreferencesCountArgs>(
      args?: Subset<T, NotificationPreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationPreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationPreferencesAggregateArgs>(args: Subset<T, NotificationPreferencesAggregateArgs>): Prisma.PrismaPromise<GetNotificationPreferencesAggregateType<T>>

    /**
     * Group by NotificationPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferencesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationPreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationPreferencesGroupByArgs['orderBy'] }
        : { orderBy?: NotificationPreferencesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationPreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationPreferences model
   */
  readonly fields: NotificationPreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationPreferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationPreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    userProfile<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the NotificationPreferences model
   */ 
  interface NotificationPreferencesFieldRefs {
    readonly id: FieldRef<"NotificationPreferences", 'String'>
    readonly userProfileId: FieldRef<"NotificationPreferences", 'String'>
    readonly interventions: FieldRef<"NotificationPreferences", 'Boolean'>
    readonly celebrations: FieldRef<"NotificationPreferences", 'Boolean'>
    readonly suggestions: FieldRef<"NotificationPreferences", 'Boolean'>
    readonly email: FieldRef<"NotificationPreferences", 'Boolean'>
    readonly createdAt: FieldRef<"NotificationPreferences", 'DateTime'>
    readonly updatedAt: FieldRef<"NotificationPreferences", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * NotificationPreferences findUnique
   */
  export type NotificationPreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which NotificationPreferences to fetch.
     */
    where: NotificationPreferencesWhereUniqueInput
  }


  /**
   * NotificationPreferences findUniqueOrThrow
   */
  export type NotificationPreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which NotificationPreferences to fetch.
     */
    where: NotificationPreferencesWhereUniqueInput
  }


  /**
   * NotificationPreferences findFirst
   */
  export type NotificationPreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which NotificationPreferences to fetch.
     */
    where?: NotificationPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationPreferences to fetch.
     */
    orderBy?: NotificationPreferencesOrderByWithRelationInput | NotificationPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationPreferences.
     */
    cursor?: NotificationPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationPreferences.
     */
    distinct?: NotificationPreferencesScalarFieldEnum | NotificationPreferencesScalarFieldEnum[]
  }


  /**
   * NotificationPreferences findFirstOrThrow
   */
  export type NotificationPreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which NotificationPreferences to fetch.
     */
    where?: NotificationPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationPreferences to fetch.
     */
    orderBy?: NotificationPreferencesOrderByWithRelationInput | NotificationPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationPreferences.
     */
    cursor?: NotificationPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationPreferences.
     */
    distinct?: NotificationPreferencesScalarFieldEnum | NotificationPreferencesScalarFieldEnum[]
  }


  /**
   * NotificationPreferences findMany
   */
  export type NotificationPreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which NotificationPreferences to fetch.
     */
    where?: NotificationPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationPreferences to fetch.
     */
    orderBy?: NotificationPreferencesOrderByWithRelationInput | NotificationPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationPreferences.
     */
    cursor?: NotificationPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationPreferences.
     */
    skip?: number
    distinct?: NotificationPreferencesScalarFieldEnum | NotificationPreferencesScalarFieldEnum[]
  }


  /**
   * NotificationPreferences create
   */
  export type NotificationPreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationPreferences.
     */
    data: XOR<NotificationPreferencesCreateInput, NotificationPreferencesUncheckedCreateInput>
  }


  /**
   * NotificationPreferences createMany
   */
  export type NotificationPreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationPreferences.
     */
    data: NotificationPreferencesCreateManyInput | NotificationPreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * NotificationPreferences update
   */
  export type NotificationPreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationPreferences.
     */
    data: XOR<NotificationPreferencesUpdateInput, NotificationPreferencesUncheckedUpdateInput>
    /**
     * Choose, which NotificationPreferences to update.
     */
    where: NotificationPreferencesWhereUniqueInput
  }


  /**
   * NotificationPreferences updateMany
   */
  export type NotificationPreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationPreferences.
     */
    data: XOR<NotificationPreferencesUpdateManyMutationInput, NotificationPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which NotificationPreferences to update
     */
    where?: NotificationPreferencesWhereInput
  }


  /**
   * NotificationPreferences upsert
   */
  export type NotificationPreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationPreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationPreferences to update in case it exists.
     */
    where: NotificationPreferencesWhereUniqueInput
    /**
     * In case the NotificationPreferences found by the `where` argument doesn't exist, create a new NotificationPreferences with this data.
     */
    create: XOR<NotificationPreferencesCreateInput, NotificationPreferencesUncheckedCreateInput>
    /**
     * In case the NotificationPreferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationPreferencesUpdateInput, NotificationPreferencesUncheckedUpdateInput>
  }


  /**
   * NotificationPreferences delete
   */
  export type NotificationPreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationPreferencesInclude<ExtArgs> | null
    /**
     * Filter which NotificationPreferences to delete.
     */
    where: NotificationPreferencesWhereUniqueInput
  }


  /**
   * NotificationPreferences deleteMany
   */
  export type NotificationPreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationPreferences to delete
     */
    where?: NotificationPreferencesWhereInput
  }


  /**
   * NotificationPreferences without action
   */
  export type NotificationPreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationPreferencesInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    experienceLevel: 'experienceLevel',
    preferredGenres: 'preferredGenres',
    communicationStyle: 'communicationStyle',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const WorldScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    genre: 'genre',
    status: 'status',
    confidenceScore: 'confidenceScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorldScalarFieldEnum = (typeof WorldScalarFieldEnum)[keyof typeof WorldScalarFieldEnum]


  export const WorldEntityScalarFieldEnum: {
    id: 'id',
    worldId: 'worldId',
    entityType: 'entityType',
    name: 'name',
    description: 'description',
    content: 'content',
    embeddingId: 'embeddingId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorldEntityScalarFieldEnum = (typeof WorldEntityScalarFieldEnum)[keyof typeof WorldEntityScalarFieldEnum]


  export const EntityRelationshipScalarFieldEnum: {
    id: 'id',
    sourceEntityId: 'sourceEntityId',
    targetEntityId: 'targetEntityId',
    worldId: 'worldId',
    relationshipType: 'relationshipType',
    strength: 'strength',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type EntityRelationshipScalarFieldEnum = (typeof EntityRelationshipScalarFieldEnum)[keyof typeof EntityRelationshipScalarFieldEnum]


  export const WorldContentScalarFieldEnum: {
    id: 'id',
    worldId: 'worldId',
    contentType: 'contentType',
    title: 'title',
    content: 'content',
    tags: 'tags',
    embeddingId: 'embeddingId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorldContentScalarFieldEnum = (typeof WorldContentScalarFieldEnum)[keyof typeof WorldContentScalarFieldEnum]


  export const NotificationPreferencesScalarFieldEnum: {
    id: 'id',
    userProfileId: 'userProfileId',
    interventions: 'interventions',
    celebrations: 'celebrations',
    suggestions: 'suggestions',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationPreferencesScalarFieldEnum = (typeof NotificationPreferencesScalarFieldEnum)[keyof typeof NotificationPreferencesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ExperienceLevel'
   */
  export type EnumExperienceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExperienceLevel'>
    


  /**
   * Reference to a field of type 'ExperienceLevel[]'
   */
  export type ListEnumExperienceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExperienceLevel[]'>
    


  /**
   * Reference to a field of type 'CommunicationStyle'
   */
  export type EnumCommunicationStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommunicationStyle'>
    


  /**
   * Reference to a field of type 'CommunicationStyle[]'
   */
  export type ListEnumCommunicationStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommunicationStyle[]'>
    


  /**
   * Reference to a field of type 'WorldStatus'
   */
  export type EnumWorldStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorldStatus'>
    


  /**
   * Reference to a field of type 'WorldStatus[]'
   */
  export type ListEnumWorldStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorldStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'EntityType'
   */
  export type EnumEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntityType'>
    


  /**
   * Reference to a field of type 'EntityType[]'
   */
  export type ListEnumEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntityType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'ContentType'
   */
  export type EnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType'>
    


  /**
   * Reference to a field of type 'ContentType[]'
   */
  export type ListEnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    profile?: XOR<UserProfileNullableRelationFilter, UserProfileWhereInput> | null
    worlds?: WorldListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    profile?: UserProfileOrderByWithRelationInput
    worlds?: WorldOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    profile?: XOR<UserProfileNullableRelationFilter, UserProfileWhereInput> | null
    worlds?: WorldListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    experienceLevel?: EnumExperienceLevelFilter<"UserProfile"> | $Enums.ExperienceLevel
    preferredGenres?: StringNullableListFilter<"UserProfile">
    communicationStyle?: EnumCommunicationStyleFilter<"UserProfile"> | $Enums.CommunicationStyle
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    notificationPreferences?: XOR<NotificationPreferencesNullableRelationFilter, NotificationPreferencesWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    experienceLevel?: SortOrder
    preferredGenres?: SortOrder
    communicationStyle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notificationPreferences?: NotificationPreferencesOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    experienceLevel?: EnumExperienceLevelFilter<"UserProfile"> | $Enums.ExperienceLevel
    preferredGenres?: StringNullableListFilter<"UserProfile">
    communicationStyle?: EnumCommunicationStyleFilter<"UserProfile"> | $Enums.CommunicationStyle
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    notificationPreferences?: XOR<NotificationPreferencesNullableRelationFilter, NotificationPreferencesWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    experienceLevel?: SortOrder
    preferredGenres?: SortOrder
    communicationStyle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    experienceLevel?: EnumExperienceLevelWithAggregatesFilter<"UserProfile"> | $Enums.ExperienceLevel
    preferredGenres?: StringNullableListFilter<"UserProfile">
    communicationStyle?: EnumCommunicationStyleWithAggregatesFilter<"UserProfile"> | $Enums.CommunicationStyle
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type WorldWhereInput = {
    AND?: WorldWhereInput | WorldWhereInput[]
    OR?: WorldWhereInput[]
    NOT?: WorldWhereInput | WorldWhereInput[]
    id?: StringFilter<"World"> | string
    userId?: StringFilter<"World"> | string
    title?: StringFilter<"World"> | string
    description?: StringNullableFilter<"World"> | string | null
    genre?: StringNullableFilter<"World"> | string | null
    status?: EnumWorldStatusFilter<"World"> | $Enums.WorldStatus
    confidenceScore?: FloatNullableFilter<"World"> | number | null
    createdAt?: DateTimeFilter<"World"> | Date | string
    updatedAt?: DateTimeFilter<"World"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    entities?: WorldEntityListRelationFilter
    content?: WorldContentListRelationFilter
    relationships?: EntityRelationshipListRelationFilter
  }

  export type WorldOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    status?: SortOrder
    confidenceScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    entities?: WorldEntityOrderByRelationAggregateInput
    content?: WorldContentOrderByRelationAggregateInput
    relationships?: EntityRelationshipOrderByRelationAggregateInput
  }

  export type WorldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorldWhereInput | WorldWhereInput[]
    OR?: WorldWhereInput[]
    NOT?: WorldWhereInput | WorldWhereInput[]
    userId?: StringFilter<"World"> | string
    title?: StringFilter<"World"> | string
    description?: StringNullableFilter<"World"> | string | null
    genre?: StringNullableFilter<"World"> | string | null
    status?: EnumWorldStatusFilter<"World"> | $Enums.WorldStatus
    confidenceScore?: FloatNullableFilter<"World"> | number | null
    createdAt?: DateTimeFilter<"World"> | Date | string
    updatedAt?: DateTimeFilter<"World"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    entities?: WorldEntityListRelationFilter
    content?: WorldContentListRelationFilter
    relationships?: EntityRelationshipListRelationFilter
  }, "id">

  export type WorldOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    status?: SortOrder
    confidenceScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorldCountOrderByAggregateInput
    _avg?: WorldAvgOrderByAggregateInput
    _max?: WorldMaxOrderByAggregateInput
    _min?: WorldMinOrderByAggregateInput
    _sum?: WorldSumOrderByAggregateInput
  }

  export type WorldScalarWhereWithAggregatesInput = {
    AND?: WorldScalarWhereWithAggregatesInput | WorldScalarWhereWithAggregatesInput[]
    OR?: WorldScalarWhereWithAggregatesInput[]
    NOT?: WorldScalarWhereWithAggregatesInput | WorldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"World"> | string
    userId?: StringWithAggregatesFilter<"World"> | string
    title?: StringWithAggregatesFilter<"World"> | string
    description?: StringNullableWithAggregatesFilter<"World"> | string | null
    genre?: StringNullableWithAggregatesFilter<"World"> | string | null
    status?: EnumWorldStatusWithAggregatesFilter<"World"> | $Enums.WorldStatus
    confidenceScore?: FloatNullableWithAggregatesFilter<"World"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"World"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"World"> | Date | string
  }

  export type WorldEntityWhereInput = {
    AND?: WorldEntityWhereInput | WorldEntityWhereInput[]
    OR?: WorldEntityWhereInput[]
    NOT?: WorldEntityWhereInput | WorldEntityWhereInput[]
    id?: StringFilter<"WorldEntity"> | string
    worldId?: StringFilter<"WorldEntity"> | string
    entityType?: EnumEntityTypeFilter<"WorldEntity"> | $Enums.EntityType
    name?: StringFilter<"WorldEntity"> | string
    description?: StringNullableFilter<"WorldEntity"> | string | null
    content?: JsonNullableFilter<"WorldEntity">
    embeddingId?: StringNullableFilter<"WorldEntity"> | string | null
    createdAt?: DateTimeFilter<"WorldEntity"> | Date | string
    updatedAt?: DateTimeFilter<"WorldEntity"> | Date | string
    world?: XOR<WorldRelationFilter, WorldWhereInput>
    sourceRelationships?: EntityRelationshipListRelationFilter
    targetRelationships?: EntityRelationshipListRelationFilter
  }

  export type WorldEntityOrderByWithRelationInput = {
    id?: SortOrder
    worldId?: SortOrder
    entityType?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    embeddingId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    world?: WorldOrderByWithRelationInput
    sourceRelationships?: EntityRelationshipOrderByRelationAggregateInput
    targetRelationships?: EntityRelationshipOrderByRelationAggregateInput
  }

  export type WorldEntityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorldEntityWhereInput | WorldEntityWhereInput[]
    OR?: WorldEntityWhereInput[]
    NOT?: WorldEntityWhereInput | WorldEntityWhereInput[]
    worldId?: StringFilter<"WorldEntity"> | string
    entityType?: EnumEntityTypeFilter<"WorldEntity"> | $Enums.EntityType
    name?: StringFilter<"WorldEntity"> | string
    description?: StringNullableFilter<"WorldEntity"> | string | null
    content?: JsonNullableFilter<"WorldEntity">
    embeddingId?: StringNullableFilter<"WorldEntity"> | string | null
    createdAt?: DateTimeFilter<"WorldEntity"> | Date | string
    updatedAt?: DateTimeFilter<"WorldEntity"> | Date | string
    world?: XOR<WorldRelationFilter, WorldWhereInput>
    sourceRelationships?: EntityRelationshipListRelationFilter
    targetRelationships?: EntityRelationshipListRelationFilter
  }, "id">

  export type WorldEntityOrderByWithAggregationInput = {
    id?: SortOrder
    worldId?: SortOrder
    entityType?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    embeddingId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorldEntityCountOrderByAggregateInput
    _max?: WorldEntityMaxOrderByAggregateInput
    _min?: WorldEntityMinOrderByAggregateInput
  }

  export type WorldEntityScalarWhereWithAggregatesInput = {
    AND?: WorldEntityScalarWhereWithAggregatesInput | WorldEntityScalarWhereWithAggregatesInput[]
    OR?: WorldEntityScalarWhereWithAggregatesInput[]
    NOT?: WorldEntityScalarWhereWithAggregatesInput | WorldEntityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorldEntity"> | string
    worldId?: StringWithAggregatesFilter<"WorldEntity"> | string
    entityType?: EnumEntityTypeWithAggregatesFilter<"WorldEntity"> | $Enums.EntityType
    name?: StringWithAggregatesFilter<"WorldEntity"> | string
    description?: StringNullableWithAggregatesFilter<"WorldEntity"> | string | null
    content?: JsonNullableWithAggregatesFilter<"WorldEntity">
    embeddingId?: StringNullableWithAggregatesFilter<"WorldEntity"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorldEntity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorldEntity"> | Date | string
  }

  export type EntityRelationshipWhereInput = {
    AND?: EntityRelationshipWhereInput | EntityRelationshipWhereInput[]
    OR?: EntityRelationshipWhereInput[]
    NOT?: EntityRelationshipWhereInput | EntityRelationshipWhereInput[]
    id?: StringFilter<"EntityRelationship"> | string
    sourceEntityId?: StringFilter<"EntityRelationship"> | string
    targetEntityId?: StringFilter<"EntityRelationship"> | string
    worldId?: StringFilter<"EntityRelationship"> | string
    relationshipType?: StringFilter<"EntityRelationship"> | string
    strength?: FloatNullableFilter<"EntityRelationship"> | number | null
    description?: StringNullableFilter<"EntityRelationship"> | string | null
    createdAt?: DateTimeFilter<"EntityRelationship"> | Date | string
    sourceEntity?: XOR<WorldEntityRelationFilter, WorldEntityWhereInput>
    targetEntity?: XOR<WorldEntityRelationFilter, WorldEntityWhereInput>
    world?: XOR<WorldRelationFilter, WorldWhereInput>
  }

  export type EntityRelationshipOrderByWithRelationInput = {
    id?: SortOrder
    sourceEntityId?: SortOrder
    targetEntityId?: SortOrder
    worldId?: SortOrder
    relationshipType?: SortOrder
    strength?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    sourceEntity?: WorldEntityOrderByWithRelationInput
    targetEntity?: WorldEntityOrderByWithRelationInput
    world?: WorldOrderByWithRelationInput
  }

  export type EntityRelationshipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EntityRelationshipWhereInput | EntityRelationshipWhereInput[]
    OR?: EntityRelationshipWhereInput[]
    NOT?: EntityRelationshipWhereInput | EntityRelationshipWhereInput[]
    sourceEntityId?: StringFilter<"EntityRelationship"> | string
    targetEntityId?: StringFilter<"EntityRelationship"> | string
    worldId?: StringFilter<"EntityRelationship"> | string
    relationshipType?: StringFilter<"EntityRelationship"> | string
    strength?: FloatNullableFilter<"EntityRelationship"> | number | null
    description?: StringNullableFilter<"EntityRelationship"> | string | null
    createdAt?: DateTimeFilter<"EntityRelationship"> | Date | string
    sourceEntity?: XOR<WorldEntityRelationFilter, WorldEntityWhereInput>
    targetEntity?: XOR<WorldEntityRelationFilter, WorldEntityWhereInput>
    world?: XOR<WorldRelationFilter, WorldWhereInput>
  }, "id">

  export type EntityRelationshipOrderByWithAggregationInput = {
    id?: SortOrder
    sourceEntityId?: SortOrder
    targetEntityId?: SortOrder
    worldId?: SortOrder
    relationshipType?: SortOrder
    strength?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EntityRelationshipCountOrderByAggregateInput
    _avg?: EntityRelationshipAvgOrderByAggregateInput
    _max?: EntityRelationshipMaxOrderByAggregateInput
    _min?: EntityRelationshipMinOrderByAggregateInput
    _sum?: EntityRelationshipSumOrderByAggregateInput
  }

  export type EntityRelationshipScalarWhereWithAggregatesInput = {
    AND?: EntityRelationshipScalarWhereWithAggregatesInput | EntityRelationshipScalarWhereWithAggregatesInput[]
    OR?: EntityRelationshipScalarWhereWithAggregatesInput[]
    NOT?: EntityRelationshipScalarWhereWithAggregatesInput | EntityRelationshipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EntityRelationship"> | string
    sourceEntityId?: StringWithAggregatesFilter<"EntityRelationship"> | string
    targetEntityId?: StringWithAggregatesFilter<"EntityRelationship"> | string
    worldId?: StringWithAggregatesFilter<"EntityRelationship"> | string
    relationshipType?: StringWithAggregatesFilter<"EntityRelationship"> | string
    strength?: FloatNullableWithAggregatesFilter<"EntityRelationship"> | number | null
    description?: StringNullableWithAggregatesFilter<"EntityRelationship"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EntityRelationship"> | Date | string
  }

  export type WorldContentWhereInput = {
    AND?: WorldContentWhereInput | WorldContentWhereInput[]
    OR?: WorldContentWhereInput[]
    NOT?: WorldContentWhereInput | WorldContentWhereInput[]
    id?: StringFilter<"WorldContent"> | string
    worldId?: StringFilter<"WorldContent"> | string
    contentType?: EnumContentTypeFilter<"WorldContent"> | $Enums.ContentType
    title?: StringNullableFilter<"WorldContent"> | string | null
    content?: StringFilter<"WorldContent"> | string
    tags?: StringNullableListFilter<"WorldContent">
    embeddingId?: StringNullableFilter<"WorldContent"> | string | null
    createdAt?: DateTimeFilter<"WorldContent"> | Date | string
    updatedAt?: DateTimeFilter<"WorldContent"> | Date | string
    world?: XOR<WorldRelationFilter, WorldWhereInput>
  }

  export type WorldContentOrderByWithRelationInput = {
    id?: SortOrder
    worldId?: SortOrder
    contentType?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrder
    tags?: SortOrder
    embeddingId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    world?: WorldOrderByWithRelationInput
  }

  export type WorldContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorldContentWhereInput | WorldContentWhereInput[]
    OR?: WorldContentWhereInput[]
    NOT?: WorldContentWhereInput | WorldContentWhereInput[]
    worldId?: StringFilter<"WorldContent"> | string
    contentType?: EnumContentTypeFilter<"WorldContent"> | $Enums.ContentType
    title?: StringNullableFilter<"WorldContent"> | string | null
    content?: StringFilter<"WorldContent"> | string
    tags?: StringNullableListFilter<"WorldContent">
    embeddingId?: StringNullableFilter<"WorldContent"> | string | null
    createdAt?: DateTimeFilter<"WorldContent"> | Date | string
    updatedAt?: DateTimeFilter<"WorldContent"> | Date | string
    world?: XOR<WorldRelationFilter, WorldWhereInput>
  }, "id">

  export type WorldContentOrderByWithAggregationInput = {
    id?: SortOrder
    worldId?: SortOrder
    contentType?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrder
    tags?: SortOrder
    embeddingId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorldContentCountOrderByAggregateInput
    _max?: WorldContentMaxOrderByAggregateInput
    _min?: WorldContentMinOrderByAggregateInput
  }

  export type WorldContentScalarWhereWithAggregatesInput = {
    AND?: WorldContentScalarWhereWithAggregatesInput | WorldContentScalarWhereWithAggregatesInput[]
    OR?: WorldContentScalarWhereWithAggregatesInput[]
    NOT?: WorldContentScalarWhereWithAggregatesInput | WorldContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorldContent"> | string
    worldId?: StringWithAggregatesFilter<"WorldContent"> | string
    contentType?: EnumContentTypeWithAggregatesFilter<"WorldContent"> | $Enums.ContentType
    title?: StringNullableWithAggregatesFilter<"WorldContent"> | string | null
    content?: StringWithAggregatesFilter<"WorldContent"> | string
    tags?: StringNullableListFilter<"WorldContent">
    embeddingId?: StringNullableWithAggregatesFilter<"WorldContent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorldContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorldContent"> | Date | string
  }

  export type NotificationPreferencesWhereInput = {
    AND?: NotificationPreferencesWhereInput | NotificationPreferencesWhereInput[]
    OR?: NotificationPreferencesWhereInput[]
    NOT?: NotificationPreferencesWhereInput | NotificationPreferencesWhereInput[]
    id?: StringFilter<"NotificationPreferences"> | string
    userProfileId?: StringFilter<"NotificationPreferences"> | string
    interventions?: BoolFilter<"NotificationPreferences"> | boolean
    celebrations?: BoolFilter<"NotificationPreferences"> | boolean
    suggestions?: BoolFilter<"NotificationPreferences"> | boolean
    email?: BoolFilter<"NotificationPreferences"> | boolean
    createdAt?: DateTimeFilter<"NotificationPreferences"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationPreferences"> | Date | string
    userProfile?: XOR<UserProfileRelationFilter, UserProfileWhereInput>
  }

  export type NotificationPreferencesOrderByWithRelationInput = {
    id?: SortOrder
    userProfileId?: SortOrder
    interventions?: SortOrder
    celebrations?: SortOrder
    suggestions?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userProfile?: UserProfileOrderByWithRelationInput
  }

  export type NotificationPreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userProfileId?: string
    AND?: NotificationPreferencesWhereInput | NotificationPreferencesWhereInput[]
    OR?: NotificationPreferencesWhereInput[]
    NOT?: NotificationPreferencesWhereInput | NotificationPreferencesWhereInput[]
    interventions?: BoolFilter<"NotificationPreferences"> | boolean
    celebrations?: BoolFilter<"NotificationPreferences"> | boolean
    suggestions?: BoolFilter<"NotificationPreferences"> | boolean
    email?: BoolFilter<"NotificationPreferences"> | boolean
    createdAt?: DateTimeFilter<"NotificationPreferences"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationPreferences"> | Date | string
    userProfile?: XOR<UserProfileRelationFilter, UserProfileWhereInput>
  }, "id" | "userProfileId">

  export type NotificationPreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    userProfileId?: SortOrder
    interventions?: SortOrder
    celebrations?: SortOrder
    suggestions?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationPreferencesCountOrderByAggregateInput
    _max?: NotificationPreferencesMaxOrderByAggregateInput
    _min?: NotificationPreferencesMinOrderByAggregateInput
  }

  export type NotificationPreferencesScalarWhereWithAggregatesInput = {
    AND?: NotificationPreferencesScalarWhereWithAggregatesInput | NotificationPreferencesScalarWhereWithAggregatesInput[]
    OR?: NotificationPreferencesScalarWhereWithAggregatesInput[]
    NOT?: NotificationPreferencesScalarWhereWithAggregatesInput | NotificationPreferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationPreferences"> | string
    userProfileId?: StringWithAggregatesFilter<"NotificationPreferences"> | string
    interventions?: BoolWithAggregatesFilter<"NotificationPreferences"> | boolean
    celebrations?: BoolWithAggregatesFilter<"NotificationPreferences"> | boolean
    suggestions?: BoolWithAggregatesFilter<"NotificationPreferences"> | boolean
    email?: BoolWithAggregatesFilter<"NotificationPreferences"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"NotificationPreferences"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NotificationPreferences"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
    worlds?: WorldCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    worlds?: WorldUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    worlds?: WorldUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    worlds?: WorldUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    experienceLevel?: $Enums.ExperienceLevel
    preferredGenres?: UserProfileCreatepreferredGenresInput | string[]
    communicationStyle?: $Enums.CommunicationStyle
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationPreferences?: NotificationPreferencesCreateNestedOneWithoutUserProfileInput
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    experienceLevel?: $Enums.ExperienceLevel
    preferredGenres?: UserProfileCreatepreferredGenresInput | string[]
    communicationStyle?: $Enums.CommunicationStyle
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationPreferences?: NotificationPreferencesUncheckedCreateNestedOneWithoutUserProfileInput
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    preferredGenres?: UserProfileUpdatepreferredGenresInput | string[]
    communicationStyle?: EnumCommunicationStyleFieldUpdateOperationsInput | $Enums.CommunicationStyle
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationPreferences?: NotificationPreferencesUpdateOneWithoutUserProfileNestedInput
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    preferredGenres?: UserProfileUpdatepreferredGenresInput | string[]
    communicationStyle?: EnumCommunicationStyleFieldUpdateOperationsInput | $Enums.CommunicationStyle
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationPreferences?: NotificationPreferencesUncheckedUpdateOneWithoutUserProfileNestedInput
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    experienceLevel?: $Enums.ExperienceLevel
    preferredGenres?: UserProfileCreatepreferredGenresInput | string[]
    communicationStyle?: $Enums.CommunicationStyle
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    preferredGenres?: UserProfileUpdatepreferredGenresInput | string[]
    communicationStyle?: EnumCommunicationStyleFieldUpdateOperationsInput | $Enums.CommunicationStyle
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    preferredGenres?: UserProfileUpdatepreferredGenresInput | string[]
    communicationStyle?: EnumCommunicationStyleFieldUpdateOperationsInput | $Enums.CommunicationStyle
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorldCreateInput = {
    id?: string
    title: string
    description?: string | null
    genre?: string | null
    status?: $Enums.WorldStatus
    confidenceScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorldsInput
    entities?: WorldEntityCreateNestedManyWithoutWorldInput
    content?: WorldContentCreateNestedManyWithoutWorldInput
    relationships?: EntityRelationshipCreateNestedManyWithoutWorldInput
  }

  export type WorldUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    genre?: string | null
    status?: $Enums.WorldStatus
    confidenceScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entities?: WorldEntityUncheckedCreateNestedManyWithoutWorldInput
    content?: WorldContentUncheckedCreateNestedManyWithoutWorldInput
    relationships?: EntityRelationshipUncheckedCreateNestedManyWithoutWorldInput
  }

  export type WorldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorldStatusFieldUpdateOperationsInput | $Enums.WorldStatus
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorldsNestedInput
    entities?: WorldEntityUpdateManyWithoutWorldNestedInput
    content?: WorldContentUpdateManyWithoutWorldNestedInput
    relationships?: EntityRelationshipUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorldStatusFieldUpdateOperationsInput | $Enums.WorldStatus
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entities?: WorldEntityUncheckedUpdateManyWithoutWorldNestedInput
    content?: WorldContentUncheckedUpdateManyWithoutWorldNestedInput
    relationships?: EntityRelationshipUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type WorldCreateManyInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    genre?: string | null
    status?: $Enums.WorldStatus
    confidenceScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorldStatusFieldUpdateOperationsInput | $Enums.WorldStatus
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorldStatusFieldUpdateOperationsInput | $Enums.WorldStatus
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorldEntityCreateInput = {
    id?: string
    entityType: $Enums.EntityType
    name: string
    description?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    world: WorldCreateNestedOneWithoutEntitiesInput
    sourceRelationships?: EntityRelationshipCreateNestedManyWithoutSourceEntityInput
    targetRelationships?: EntityRelationshipCreateNestedManyWithoutTargetEntityInput
  }

  export type WorldEntityUncheckedCreateInput = {
    id?: string
    worldId: string
    entityType: $Enums.EntityType
    name: string
    description?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceRelationships?: EntityRelationshipUncheckedCreateNestedManyWithoutSourceEntityInput
    targetRelationships?: EntityRelationshipUncheckedCreateNestedManyWithoutTargetEntityInput
  }

  export type WorldEntityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    world?: WorldUpdateOneRequiredWithoutEntitiesNestedInput
    sourceRelationships?: EntityRelationshipUpdateManyWithoutSourceEntityNestedInput
    targetRelationships?: EntityRelationshipUpdateManyWithoutTargetEntityNestedInput
  }

  export type WorldEntityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceRelationships?: EntityRelationshipUncheckedUpdateManyWithoutSourceEntityNestedInput
    targetRelationships?: EntityRelationshipUncheckedUpdateManyWithoutTargetEntityNestedInput
  }

  export type WorldEntityCreateManyInput = {
    id?: string
    worldId: string
    entityType: $Enums.EntityType
    name: string
    description?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorldEntityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorldEntityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityRelationshipCreateInput = {
    id?: string
    relationshipType: string
    strength?: number | null
    description?: string | null
    createdAt?: Date | string
    sourceEntity: WorldEntityCreateNestedOneWithoutSourceRelationshipsInput
    targetEntity: WorldEntityCreateNestedOneWithoutTargetRelationshipsInput
    world: WorldCreateNestedOneWithoutRelationshipsInput
  }

  export type EntityRelationshipUncheckedCreateInput = {
    id?: string
    sourceEntityId: string
    targetEntityId: string
    worldId: string
    relationshipType: string
    strength?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type EntityRelationshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationshipType?: StringFieldUpdateOperationsInput | string
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceEntity?: WorldEntityUpdateOneRequiredWithoutSourceRelationshipsNestedInput
    targetEntity?: WorldEntityUpdateOneRequiredWithoutTargetRelationshipsNestedInput
    world?: WorldUpdateOneRequiredWithoutRelationshipsNestedInput
  }

  export type EntityRelationshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceEntityId?: StringFieldUpdateOperationsInput | string
    targetEntityId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    relationshipType?: StringFieldUpdateOperationsInput | string
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityRelationshipCreateManyInput = {
    id?: string
    sourceEntityId: string
    targetEntityId: string
    worldId: string
    relationshipType: string
    strength?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type EntityRelationshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationshipType?: StringFieldUpdateOperationsInput | string
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityRelationshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceEntityId?: StringFieldUpdateOperationsInput | string
    targetEntityId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    relationshipType?: StringFieldUpdateOperationsInput | string
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorldContentCreateInput = {
    id?: string
    contentType: $Enums.ContentType
    title?: string | null
    content: string
    tags?: WorldContentCreatetagsInput | string[]
    embeddingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    world: WorldCreateNestedOneWithoutContentInput
  }

  export type WorldContentUncheckedCreateInput = {
    id?: string
    worldId: string
    contentType: $Enums.ContentType
    title?: string | null
    content: string
    tags?: WorldContentCreatetagsInput | string[]
    embeddingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorldContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    tags?: WorldContentUpdatetagsInput | string[]
    embeddingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    world?: WorldUpdateOneRequiredWithoutContentNestedInput
  }

  export type WorldContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    tags?: WorldContentUpdatetagsInput | string[]
    embeddingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorldContentCreateManyInput = {
    id?: string
    worldId: string
    contentType: $Enums.ContentType
    title?: string | null
    content: string
    tags?: WorldContentCreatetagsInput | string[]
    embeddingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorldContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    tags?: WorldContentUpdatetagsInput | string[]
    embeddingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorldContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    tags?: WorldContentUpdatetagsInput | string[]
    embeddingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationPreferencesCreateInput = {
    id?: string
    interventions?: boolean
    celebrations?: boolean
    suggestions?: boolean
    email?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile: UserProfileCreateNestedOneWithoutNotificationPreferencesInput
  }

  export type NotificationPreferencesUncheckedCreateInput = {
    id?: string
    userProfileId: string
    interventions?: boolean
    celebrations?: boolean
    suggestions?: boolean
    email?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationPreferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    interventions?: BoolFieldUpdateOperationsInput | boolean
    celebrations?: BoolFieldUpdateOperationsInput | boolean
    suggestions?: BoolFieldUpdateOperationsInput | boolean
    email?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUpdateOneRequiredWithoutNotificationPreferencesNestedInput
  }

  export type NotificationPreferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userProfileId?: StringFieldUpdateOperationsInput | string
    interventions?: BoolFieldUpdateOperationsInput | boolean
    celebrations?: BoolFieldUpdateOperationsInput | boolean
    suggestions?: BoolFieldUpdateOperationsInput | boolean
    email?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationPreferencesCreateManyInput = {
    id?: string
    userProfileId: string
    interventions?: boolean
    celebrations?: boolean
    suggestions?: boolean
    email?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationPreferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    interventions?: BoolFieldUpdateOperationsInput | boolean
    celebrations?: BoolFieldUpdateOperationsInput | boolean
    suggestions?: BoolFieldUpdateOperationsInput | boolean
    email?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationPreferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userProfileId?: StringFieldUpdateOperationsInput | string
    interventions?: BoolFieldUpdateOperationsInput | boolean
    celebrations?: BoolFieldUpdateOperationsInput | boolean
    suggestions?: BoolFieldUpdateOperationsInput | boolean
    email?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type UserProfileNullableRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type WorldListRelationFilter = {
    every?: WorldWhereInput
    some?: WorldWhereInput
    none?: WorldWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumExperienceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelFilter<$PrismaModel> | $Enums.ExperienceLevel
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumCommunicationStyleFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationStyle | EnumCommunicationStyleFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationStyle[] | ListEnumCommunicationStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationStyle[] | ListEnumCommunicationStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationStyleFilter<$PrismaModel> | $Enums.CommunicationStyle
  }

  export type NotificationPreferencesNullableRelationFilter = {
    is?: NotificationPreferencesWhereInput | null
    isNot?: NotificationPreferencesWhereInput | null
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    experienceLevel?: SortOrder
    preferredGenres?: SortOrder
    communicationStyle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    experienceLevel?: SortOrder
    communicationStyle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    experienceLevel?: SortOrder
    communicationStyle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumExperienceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ExperienceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExperienceLevelFilter<$PrismaModel>
    _max?: NestedEnumExperienceLevelFilter<$PrismaModel>
  }

  export type EnumCommunicationStyleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationStyle | EnumCommunicationStyleFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationStyle[] | ListEnumCommunicationStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationStyle[] | ListEnumCommunicationStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationStyleWithAggregatesFilter<$PrismaModel> | $Enums.CommunicationStyle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommunicationStyleFilter<$PrismaModel>
    _max?: NestedEnumCommunicationStyleFilter<$PrismaModel>
  }

  export type EnumWorldStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorldStatus | EnumWorldStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorldStatus[] | ListEnumWorldStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorldStatus[] | ListEnumWorldStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorldStatusFilter<$PrismaModel> | $Enums.WorldStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type WorldEntityListRelationFilter = {
    every?: WorldEntityWhereInput
    some?: WorldEntityWhereInput
    none?: WorldEntityWhereInput
  }

  export type WorldContentListRelationFilter = {
    every?: WorldContentWhereInput
    some?: WorldContentWhereInput
    none?: WorldContentWhereInput
  }

  export type EntityRelationshipListRelationFilter = {
    every?: EntityRelationshipWhereInput
    some?: EntityRelationshipWhereInput
    none?: EntityRelationshipWhereInput
  }

  export type WorldEntityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorldContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntityRelationshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorldCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    genre?: SortOrder
    status?: SortOrder
    confidenceScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorldAvgOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type WorldMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    genre?: SortOrder
    status?: SortOrder
    confidenceScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorldMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    genre?: SortOrder
    status?: SortOrder
    confidenceScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorldSumOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type EnumWorldStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorldStatus | EnumWorldStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorldStatus[] | ListEnumWorldStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorldStatus[] | ListEnumWorldStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorldStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorldStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorldStatusFilter<$PrismaModel>
    _max?: NestedEnumWorldStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeFilter<$PrismaModel> | $Enums.EntityType
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WorldRelationFilter = {
    is?: WorldWhereInput
    isNot?: WorldWhereInput
  }

  export type WorldEntityCountOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    entityType?: SortOrder
    name?: SortOrder
    description?: SortOrder
    content?: SortOrder
    embeddingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorldEntityMaxOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    entityType?: SortOrder
    name?: SortOrder
    description?: SortOrder
    embeddingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorldEntityMinOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    entityType?: SortOrder
    name?: SortOrder
    description?: SortOrder
    embeddingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.EntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumEntityTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type WorldEntityRelationFilter = {
    is?: WorldEntityWhereInput
    isNot?: WorldEntityWhereInput
  }

  export type EntityRelationshipCountOrderByAggregateInput = {
    id?: SortOrder
    sourceEntityId?: SortOrder
    targetEntityId?: SortOrder
    worldId?: SortOrder
    relationshipType?: SortOrder
    strength?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type EntityRelationshipAvgOrderByAggregateInput = {
    strength?: SortOrder
  }

  export type EntityRelationshipMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceEntityId?: SortOrder
    targetEntityId?: SortOrder
    worldId?: SortOrder
    relationshipType?: SortOrder
    strength?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type EntityRelationshipMinOrderByAggregateInput = {
    id?: SortOrder
    sourceEntityId?: SortOrder
    targetEntityId?: SortOrder
    worldId?: SortOrder
    relationshipType?: SortOrder
    strength?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type EntityRelationshipSumOrderByAggregateInput = {
    strength?: SortOrder
  }

  export type EnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type WorldContentCountOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    contentType?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    embeddingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorldContentMaxOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    contentType?: SortOrder
    title?: SortOrder
    content?: SortOrder
    embeddingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorldContentMinOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    contentType?: SortOrder
    title?: SortOrder
    content?: SortOrder
    embeddingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type UserProfileRelationFilter = {
    is?: UserProfileWhereInput
    isNot?: UserProfileWhereInput
  }

  export type NotificationPreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    userProfileId?: SortOrder
    interventions?: SortOrder
    celebrations?: SortOrder
    suggestions?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationPreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    userProfileId?: SortOrder
    interventions?: SortOrder
    celebrations?: SortOrder
    suggestions?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationPreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    userProfileId?: SortOrder
    interventions?: SortOrder
    celebrations?: SortOrder
    suggestions?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type WorldCreateNestedManyWithoutUserInput = {
    create?: XOR<WorldCreateWithoutUserInput, WorldUncheckedCreateWithoutUserInput> | WorldCreateWithoutUserInput[] | WorldUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorldCreateOrConnectWithoutUserInput | WorldCreateOrConnectWithoutUserInput[]
    createMany?: WorldCreateManyUserInputEnvelope
    connect?: WorldWhereUniqueInput | WorldWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type WorldUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorldCreateWithoutUserInput, WorldUncheckedCreateWithoutUserInput> | WorldCreateWithoutUserInput[] | WorldUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorldCreateOrConnectWithoutUserInput | WorldCreateOrConnectWithoutUserInput[]
    createMany?: WorldCreateManyUserInputEnvelope
    connect?: WorldWhereUniqueInput | WorldWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type WorldUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorldCreateWithoutUserInput, WorldUncheckedCreateWithoutUserInput> | WorldCreateWithoutUserInput[] | WorldUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorldCreateOrConnectWithoutUserInput | WorldCreateOrConnectWithoutUserInput[]
    upsert?: WorldUpsertWithWhereUniqueWithoutUserInput | WorldUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorldCreateManyUserInputEnvelope
    set?: WorldWhereUniqueInput | WorldWhereUniqueInput[]
    disconnect?: WorldWhereUniqueInput | WorldWhereUniqueInput[]
    delete?: WorldWhereUniqueInput | WorldWhereUniqueInput[]
    connect?: WorldWhereUniqueInput | WorldWhereUniqueInput[]
    update?: WorldUpdateWithWhereUniqueWithoutUserInput | WorldUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorldUpdateManyWithWhereWithoutUserInput | WorldUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorldScalarWhereInput | WorldScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type WorldUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorldCreateWithoutUserInput, WorldUncheckedCreateWithoutUserInput> | WorldCreateWithoutUserInput[] | WorldUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorldCreateOrConnectWithoutUserInput | WorldCreateOrConnectWithoutUserInput[]
    upsert?: WorldUpsertWithWhereUniqueWithoutUserInput | WorldUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorldCreateManyUserInputEnvelope
    set?: WorldWhereUniqueInput | WorldWhereUniqueInput[]
    disconnect?: WorldWhereUniqueInput | WorldWhereUniqueInput[]
    delete?: WorldWhereUniqueInput | WorldWhereUniqueInput[]
    connect?: WorldWhereUniqueInput | WorldWhereUniqueInput[]
    update?: WorldUpdateWithWhereUniqueWithoutUserInput | WorldUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorldUpdateManyWithWhereWithoutUserInput | WorldUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorldScalarWhereInput | WorldScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserProfileCreatepreferredGenresInput = {
    set: string[]
  }

  export type NotificationPreferencesCreateNestedOneWithoutUserProfileInput = {
    create?: XOR<NotificationPreferencesCreateWithoutUserProfileInput, NotificationPreferencesUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: NotificationPreferencesCreateOrConnectWithoutUserProfileInput
    connect?: NotificationPreferencesWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NotificationPreferencesUncheckedCreateNestedOneWithoutUserProfileInput = {
    create?: XOR<NotificationPreferencesCreateWithoutUserProfileInput, NotificationPreferencesUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: NotificationPreferencesCreateOrConnectWithoutUserProfileInput
    connect?: NotificationPreferencesWhereUniqueInput
  }

  export type EnumExperienceLevelFieldUpdateOperationsInput = {
    set?: $Enums.ExperienceLevel
  }

  export type UserProfileUpdatepreferredGenresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumCommunicationStyleFieldUpdateOperationsInput = {
    set?: $Enums.CommunicationStyle
  }

  export type NotificationPreferencesUpdateOneWithoutUserProfileNestedInput = {
    create?: XOR<NotificationPreferencesCreateWithoutUserProfileInput, NotificationPreferencesUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: NotificationPreferencesCreateOrConnectWithoutUserProfileInput
    upsert?: NotificationPreferencesUpsertWithoutUserProfileInput
    disconnect?: NotificationPreferencesWhereInput | boolean
    delete?: NotificationPreferencesWhereInput | boolean
    connect?: NotificationPreferencesWhereUniqueInput
    update?: XOR<XOR<NotificationPreferencesUpdateToOneWithWhereWithoutUserProfileInput, NotificationPreferencesUpdateWithoutUserProfileInput>, NotificationPreferencesUncheckedUpdateWithoutUserProfileInput>
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type NotificationPreferencesUncheckedUpdateOneWithoutUserProfileNestedInput = {
    create?: XOR<NotificationPreferencesCreateWithoutUserProfileInput, NotificationPreferencesUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: NotificationPreferencesCreateOrConnectWithoutUserProfileInput
    upsert?: NotificationPreferencesUpsertWithoutUserProfileInput
    disconnect?: NotificationPreferencesWhereInput | boolean
    delete?: NotificationPreferencesWhereInput | boolean
    connect?: NotificationPreferencesWhereUniqueInput
    update?: XOR<XOR<NotificationPreferencesUpdateToOneWithWhereWithoutUserProfileInput, NotificationPreferencesUpdateWithoutUserProfileInput>, NotificationPreferencesUncheckedUpdateWithoutUserProfileInput>
  }

  export type UserCreateNestedOneWithoutWorldsInput = {
    create?: XOR<UserCreateWithoutWorldsInput, UserUncheckedCreateWithoutWorldsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorldsInput
    connect?: UserWhereUniqueInput
  }

  export type WorldEntityCreateNestedManyWithoutWorldInput = {
    create?: XOR<WorldEntityCreateWithoutWorldInput, WorldEntityUncheckedCreateWithoutWorldInput> | WorldEntityCreateWithoutWorldInput[] | WorldEntityUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: WorldEntityCreateOrConnectWithoutWorldInput | WorldEntityCreateOrConnectWithoutWorldInput[]
    createMany?: WorldEntityCreateManyWorldInputEnvelope
    connect?: WorldEntityWhereUniqueInput | WorldEntityWhereUniqueInput[]
  }

  export type WorldContentCreateNestedManyWithoutWorldInput = {
    create?: XOR<WorldContentCreateWithoutWorldInput, WorldContentUncheckedCreateWithoutWorldInput> | WorldContentCreateWithoutWorldInput[] | WorldContentUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: WorldContentCreateOrConnectWithoutWorldInput | WorldContentCreateOrConnectWithoutWorldInput[]
    createMany?: WorldContentCreateManyWorldInputEnvelope
    connect?: WorldContentWhereUniqueInput | WorldContentWhereUniqueInput[]
  }

  export type EntityRelationshipCreateNestedManyWithoutWorldInput = {
    create?: XOR<EntityRelationshipCreateWithoutWorldInput, EntityRelationshipUncheckedCreateWithoutWorldInput> | EntityRelationshipCreateWithoutWorldInput[] | EntityRelationshipUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: EntityRelationshipCreateOrConnectWithoutWorldInput | EntityRelationshipCreateOrConnectWithoutWorldInput[]
    createMany?: EntityRelationshipCreateManyWorldInputEnvelope
    connect?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
  }

  export type WorldEntityUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<WorldEntityCreateWithoutWorldInput, WorldEntityUncheckedCreateWithoutWorldInput> | WorldEntityCreateWithoutWorldInput[] | WorldEntityUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: WorldEntityCreateOrConnectWithoutWorldInput | WorldEntityCreateOrConnectWithoutWorldInput[]
    createMany?: WorldEntityCreateManyWorldInputEnvelope
    connect?: WorldEntityWhereUniqueInput | WorldEntityWhereUniqueInput[]
  }

  export type WorldContentUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<WorldContentCreateWithoutWorldInput, WorldContentUncheckedCreateWithoutWorldInput> | WorldContentCreateWithoutWorldInput[] | WorldContentUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: WorldContentCreateOrConnectWithoutWorldInput | WorldContentCreateOrConnectWithoutWorldInput[]
    createMany?: WorldContentCreateManyWorldInputEnvelope
    connect?: WorldContentWhereUniqueInput | WorldContentWhereUniqueInput[]
  }

  export type EntityRelationshipUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<EntityRelationshipCreateWithoutWorldInput, EntityRelationshipUncheckedCreateWithoutWorldInput> | EntityRelationshipCreateWithoutWorldInput[] | EntityRelationshipUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: EntityRelationshipCreateOrConnectWithoutWorldInput | EntityRelationshipCreateOrConnectWithoutWorldInput[]
    createMany?: EntityRelationshipCreateManyWorldInputEnvelope
    connect?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
  }

  export type EnumWorldStatusFieldUpdateOperationsInput = {
    set?: $Enums.WorldStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutWorldsNestedInput = {
    create?: XOR<UserCreateWithoutWorldsInput, UserUncheckedCreateWithoutWorldsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorldsInput
    upsert?: UserUpsertWithoutWorldsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorldsInput, UserUpdateWithoutWorldsInput>, UserUncheckedUpdateWithoutWorldsInput>
  }

  export type WorldEntityUpdateManyWithoutWorldNestedInput = {
    create?: XOR<WorldEntityCreateWithoutWorldInput, WorldEntityUncheckedCreateWithoutWorldInput> | WorldEntityCreateWithoutWorldInput[] | WorldEntityUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: WorldEntityCreateOrConnectWithoutWorldInput | WorldEntityCreateOrConnectWithoutWorldInput[]
    upsert?: WorldEntityUpsertWithWhereUniqueWithoutWorldInput | WorldEntityUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: WorldEntityCreateManyWorldInputEnvelope
    set?: WorldEntityWhereUniqueInput | WorldEntityWhereUniqueInput[]
    disconnect?: WorldEntityWhereUniqueInput | WorldEntityWhereUniqueInput[]
    delete?: WorldEntityWhereUniqueInput | WorldEntityWhereUniqueInput[]
    connect?: WorldEntityWhereUniqueInput | WorldEntityWhereUniqueInput[]
    update?: WorldEntityUpdateWithWhereUniqueWithoutWorldInput | WorldEntityUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: WorldEntityUpdateManyWithWhereWithoutWorldInput | WorldEntityUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: WorldEntityScalarWhereInput | WorldEntityScalarWhereInput[]
  }

  export type WorldContentUpdateManyWithoutWorldNestedInput = {
    create?: XOR<WorldContentCreateWithoutWorldInput, WorldContentUncheckedCreateWithoutWorldInput> | WorldContentCreateWithoutWorldInput[] | WorldContentUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: WorldContentCreateOrConnectWithoutWorldInput | WorldContentCreateOrConnectWithoutWorldInput[]
    upsert?: WorldContentUpsertWithWhereUniqueWithoutWorldInput | WorldContentUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: WorldContentCreateManyWorldInputEnvelope
    set?: WorldContentWhereUniqueInput | WorldContentWhereUniqueInput[]
    disconnect?: WorldContentWhereUniqueInput | WorldContentWhereUniqueInput[]
    delete?: WorldContentWhereUniqueInput | WorldContentWhereUniqueInput[]
    connect?: WorldContentWhereUniqueInput | WorldContentWhereUniqueInput[]
    update?: WorldContentUpdateWithWhereUniqueWithoutWorldInput | WorldContentUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: WorldContentUpdateManyWithWhereWithoutWorldInput | WorldContentUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: WorldContentScalarWhereInput | WorldContentScalarWhereInput[]
  }

  export type EntityRelationshipUpdateManyWithoutWorldNestedInput = {
    create?: XOR<EntityRelationshipCreateWithoutWorldInput, EntityRelationshipUncheckedCreateWithoutWorldInput> | EntityRelationshipCreateWithoutWorldInput[] | EntityRelationshipUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: EntityRelationshipCreateOrConnectWithoutWorldInput | EntityRelationshipCreateOrConnectWithoutWorldInput[]
    upsert?: EntityRelationshipUpsertWithWhereUniqueWithoutWorldInput | EntityRelationshipUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: EntityRelationshipCreateManyWorldInputEnvelope
    set?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    disconnect?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    delete?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    connect?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    update?: EntityRelationshipUpdateWithWhereUniqueWithoutWorldInput | EntityRelationshipUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: EntityRelationshipUpdateManyWithWhereWithoutWorldInput | EntityRelationshipUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: EntityRelationshipScalarWhereInput | EntityRelationshipScalarWhereInput[]
  }

  export type WorldEntityUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<WorldEntityCreateWithoutWorldInput, WorldEntityUncheckedCreateWithoutWorldInput> | WorldEntityCreateWithoutWorldInput[] | WorldEntityUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: WorldEntityCreateOrConnectWithoutWorldInput | WorldEntityCreateOrConnectWithoutWorldInput[]
    upsert?: WorldEntityUpsertWithWhereUniqueWithoutWorldInput | WorldEntityUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: WorldEntityCreateManyWorldInputEnvelope
    set?: WorldEntityWhereUniqueInput | WorldEntityWhereUniqueInput[]
    disconnect?: WorldEntityWhereUniqueInput | WorldEntityWhereUniqueInput[]
    delete?: WorldEntityWhereUniqueInput | WorldEntityWhereUniqueInput[]
    connect?: WorldEntityWhereUniqueInput | WorldEntityWhereUniqueInput[]
    update?: WorldEntityUpdateWithWhereUniqueWithoutWorldInput | WorldEntityUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: WorldEntityUpdateManyWithWhereWithoutWorldInput | WorldEntityUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: WorldEntityScalarWhereInput | WorldEntityScalarWhereInput[]
  }

  export type WorldContentUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<WorldContentCreateWithoutWorldInput, WorldContentUncheckedCreateWithoutWorldInput> | WorldContentCreateWithoutWorldInput[] | WorldContentUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: WorldContentCreateOrConnectWithoutWorldInput | WorldContentCreateOrConnectWithoutWorldInput[]
    upsert?: WorldContentUpsertWithWhereUniqueWithoutWorldInput | WorldContentUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: WorldContentCreateManyWorldInputEnvelope
    set?: WorldContentWhereUniqueInput | WorldContentWhereUniqueInput[]
    disconnect?: WorldContentWhereUniqueInput | WorldContentWhereUniqueInput[]
    delete?: WorldContentWhereUniqueInput | WorldContentWhereUniqueInput[]
    connect?: WorldContentWhereUniqueInput | WorldContentWhereUniqueInput[]
    update?: WorldContentUpdateWithWhereUniqueWithoutWorldInput | WorldContentUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: WorldContentUpdateManyWithWhereWithoutWorldInput | WorldContentUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: WorldContentScalarWhereInput | WorldContentScalarWhereInput[]
  }

  export type EntityRelationshipUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<EntityRelationshipCreateWithoutWorldInput, EntityRelationshipUncheckedCreateWithoutWorldInput> | EntityRelationshipCreateWithoutWorldInput[] | EntityRelationshipUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: EntityRelationshipCreateOrConnectWithoutWorldInput | EntityRelationshipCreateOrConnectWithoutWorldInput[]
    upsert?: EntityRelationshipUpsertWithWhereUniqueWithoutWorldInput | EntityRelationshipUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: EntityRelationshipCreateManyWorldInputEnvelope
    set?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    disconnect?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    delete?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    connect?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    update?: EntityRelationshipUpdateWithWhereUniqueWithoutWorldInput | EntityRelationshipUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: EntityRelationshipUpdateManyWithWhereWithoutWorldInput | EntityRelationshipUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: EntityRelationshipScalarWhereInput | EntityRelationshipScalarWhereInput[]
  }

  export type WorldCreateNestedOneWithoutEntitiesInput = {
    create?: XOR<WorldCreateWithoutEntitiesInput, WorldUncheckedCreateWithoutEntitiesInput>
    connectOrCreate?: WorldCreateOrConnectWithoutEntitiesInput
    connect?: WorldWhereUniqueInput
  }

  export type EntityRelationshipCreateNestedManyWithoutSourceEntityInput = {
    create?: XOR<EntityRelationshipCreateWithoutSourceEntityInput, EntityRelationshipUncheckedCreateWithoutSourceEntityInput> | EntityRelationshipCreateWithoutSourceEntityInput[] | EntityRelationshipUncheckedCreateWithoutSourceEntityInput[]
    connectOrCreate?: EntityRelationshipCreateOrConnectWithoutSourceEntityInput | EntityRelationshipCreateOrConnectWithoutSourceEntityInput[]
    createMany?: EntityRelationshipCreateManySourceEntityInputEnvelope
    connect?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
  }

  export type EntityRelationshipCreateNestedManyWithoutTargetEntityInput = {
    create?: XOR<EntityRelationshipCreateWithoutTargetEntityInput, EntityRelationshipUncheckedCreateWithoutTargetEntityInput> | EntityRelationshipCreateWithoutTargetEntityInput[] | EntityRelationshipUncheckedCreateWithoutTargetEntityInput[]
    connectOrCreate?: EntityRelationshipCreateOrConnectWithoutTargetEntityInput | EntityRelationshipCreateOrConnectWithoutTargetEntityInput[]
    createMany?: EntityRelationshipCreateManyTargetEntityInputEnvelope
    connect?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
  }

  export type EntityRelationshipUncheckedCreateNestedManyWithoutSourceEntityInput = {
    create?: XOR<EntityRelationshipCreateWithoutSourceEntityInput, EntityRelationshipUncheckedCreateWithoutSourceEntityInput> | EntityRelationshipCreateWithoutSourceEntityInput[] | EntityRelationshipUncheckedCreateWithoutSourceEntityInput[]
    connectOrCreate?: EntityRelationshipCreateOrConnectWithoutSourceEntityInput | EntityRelationshipCreateOrConnectWithoutSourceEntityInput[]
    createMany?: EntityRelationshipCreateManySourceEntityInputEnvelope
    connect?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
  }

  export type EntityRelationshipUncheckedCreateNestedManyWithoutTargetEntityInput = {
    create?: XOR<EntityRelationshipCreateWithoutTargetEntityInput, EntityRelationshipUncheckedCreateWithoutTargetEntityInput> | EntityRelationshipCreateWithoutTargetEntityInput[] | EntityRelationshipUncheckedCreateWithoutTargetEntityInput[]
    connectOrCreate?: EntityRelationshipCreateOrConnectWithoutTargetEntityInput | EntityRelationshipCreateOrConnectWithoutTargetEntityInput[]
    createMany?: EntityRelationshipCreateManyTargetEntityInputEnvelope
    connect?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
  }

  export type EnumEntityTypeFieldUpdateOperationsInput = {
    set?: $Enums.EntityType
  }

  export type WorldUpdateOneRequiredWithoutEntitiesNestedInput = {
    create?: XOR<WorldCreateWithoutEntitiesInput, WorldUncheckedCreateWithoutEntitiesInput>
    connectOrCreate?: WorldCreateOrConnectWithoutEntitiesInput
    upsert?: WorldUpsertWithoutEntitiesInput
    connect?: WorldWhereUniqueInput
    update?: XOR<XOR<WorldUpdateToOneWithWhereWithoutEntitiesInput, WorldUpdateWithoutEntitiesInput>, WorldUncheckedUpdateWithoutEntitiesInput>
  }

  export type EntityRelationshipUpdateManyWithoutSourceEntityNestedInput = {
    create?: XOR<EntityRelationshipCreateWithoutSourceEntityInput, EntityRelationshipUncheckedCreateWithoutSourceEntityInput> | EntityRelationshipCreateWithoutSourceEntityInput[] | EntityRelationshipUncheckedCreateWithoutSourceEntityInput[]
    connectOrCreate?: EntityRelationshipCreateOrConnectWithoutSourceEntityInput | EntityRelationshipCreateOrConnectWithoutSourceEntityInput[]
    upsert?: EntityRelationshipUpsertWithWhereUniqueWithoutSourceEntityInput | EntityRelationshipUpsertWithWhereUniqueWithoutSourceEntityInput[]
    createMany?: EntityRelationshipCreateManySourceEntityInputEnvelope
    set?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    disconnect?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    delete?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    connect?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    update?: EntityRelationshipUpdateWithWhereUniqueWithoutSourceEntityInput | EntityRelationshipUpdateWithWhereUniqueWithoutSourceEntityInput[]
    updateMany?: EntityRelationshipUpdateManyWithWhereWithoutSourceEntityInput | EntityRelationshipUpdateManyWithWhereWithoutSourceEntityInput[]
    deleteMany?: EntityRelationshipScalarWhereInput | EntityRelationshipScalarWhereInput[]
  }

  export type EntityRelationshipUpdateManyWithoutTargetEntityNestedInput = {
    create?: XOR<EntityRelationshipCreateWithoutTargetEntityInput, EntityRelationshipUncheckedCreateWithoutTargetEntityInput> | EntityRelationshipCreateWithoutTargetEntityInput[] | EntityRelationshipUncheckedCreateWithoutTargetEntityInput[]
    connectOrCreate?: EntityRelationshipCreateOrConnectWithoutTargetEntityInput | EntityRelationshipCreateOrConnectWithoutTargetEntityInput[]
    upsert?: EntityRelationshipUpsertWithWhereUniqueWithoutTargetEntityInput | EntityRelationshipUpsertWithWhereUniqueWithoutTargetEntityInput[]
    createMany?: EntityRelationshipCreateManyTargetEntityInputEnvelope
    set?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    disconnect?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    delete?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    connect?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    update?: EntityRelationshipUpdateWithWhereUniqueWithoutTargetEntityInput | EntityRelationshipUpdateWithWhereUniqueWithoutTargetEntityInput[]
    updateMany?: EntityRelationshipUpdateManyWithWhereWithoutTargetEntityInput | EntityRelationshipUpdateManyWithWhereWithoutTargetEntityInput[]
    deleteMany?: EntityRelationshipScalarWhereInput | EntityRelationshipScalarWhereInput[]
  }

  export type EntityRelationshipUncheckedUpdateManyWithoutSourceEntityNestedInput = {
    create?: XOR<EntityRelationshipCreateWithoutSourceEntityInput, EntityRelationshipUncheckedCreateWithoutSourceEntityInput> | EntityRelationshipCreateWithoutSourceEntityInput[] | EntityRelationshipUncheckedCreateWithoutSourceEntityInput[]
    connectOrCreate?: EntityRelationshipCreateOrConnectWithoutSourceEntityInput | EntityRelationshipCreateOrConnectWithoutSourceEntityInput[]
    upsert?: EntityRelationshipUpsertWithWhereUniqueWithoutSourceEntityInput | EntityRelationshipUpsertWithWhereUniqueWithoutSourceEntityInput[]
    createMany?: EntityRelationshipCreateManySourceEntityInputEnvelope
    set?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    disconnect?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    delete?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    connect?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    update?: EntityRelationshipUpdateWithWhereUniqueWithoutSourceEntityInput | EntityRelationshipUpdateWithWhereUniqueWithoutSourceEntityInput[]
    updateMany?: EntityRelationshipUpdateManyWithWhereWithoutSourceEntityInput | EntityRelationshipUpdateManyWithWhereWithoutSourceEntityInput[]
    deleteMany?: EntityRelationshipScalarWhereInput | EntityRelationshipScalarWhereInput[]
  }

  export type EntityRelationshipUncheckedUpdateManyWithoutTargetEntityNestedInput = {
    create?: XOR<EntityRelationshipCreateWithoutTargetEntityInput, EntityRelationshipUncheckedCreateWithoutTargetEntityInput> | EntityRelationshipCreateWithoutTargetEntityInput[] | EntityRelationshipUncheckedCreateWithoutTargetEntityInput[]
    connectOrCreate?: EntityRelationshipCreateOrConnectWithoutTargetEntityInput | EntityRelationshipCreateOrConnectWithoutTargetEntityInput[]
    upsert?: EntityRelationshipUpsertWithWhereUniqueWithoutTargetEntityInput | EntityRelationshipUpsertWithWhereUniqueWithoutTargetEntityInput[]
    createMany?: EntityRelationshipCreateManyTargetEntityInputEnvelope
    set?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    disconnect?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    delete?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    connect?: EntityRelationshipWhereUniqueInput | EntityRelationshipWhereUniqueInput[]
    update?: EntityRelationshipUpdateWithWhereUniqueWithoutTargetEntityInput | EntityRelationshipUpdateWithWhereUniqueWithoutTargetEntityInput[]
    updateMany?: EntityRelationshipUpdateManyWithWhereWithoutTargetEntityInput | EntityRelationshipUpdateManyWithWhereWithoutTargetEntityInput[]
    deleteMany?: EntityRelationshipScalarWhereInput | EntityRelationshipScalarWhereInput[]
  }

  export type WorldEntityCreateNestedOneWithoutSourceRelationshipsInput = {
    create?: XOR<WorldEntityCreateWithoutSourceRelationshipsInput, WorldEntityUncheckedCreateWithoutSourceRelationshipsInput>
    connectOrCreate?: WorldEntityCreateOrConnectWithoutSourceRelationshipsInput
    connect?: WorldEntityWhereUniqueInput
  }

  export type WorldEntityCreateNestedOneWithoutTargetRelationshipsInput = {
    create?: XOR<WorldEntityCreateWithoutTargetRelationshipsInput, WorldEntityUncheckedCreateWithoutTargetRelationshipsInput>
    connectOrCreate?: WorldEntityCreateOrConnectWithoutTargetRelationshipsInput
    connect?: WorldEntityWhereUniqueInput
  }

  export type WorldCreateNestedOneWithoutRelationshipsInput = {
    create?: XOR<WorldCreateWithoutRelationshipsInput, WorldUncheckedCreateWithoutRelationshipsInput>
    connectOrCreate?: WorldCreateOrConnectWithoutRelationshipsInput
    connect?: WorldWhereUniqueInput
  }

  export type WorldEntityUpdateOneRequiredWithoutSourceRelationshipsNestedInput = {
    create?: XOR<WorldEntityCreateWithoutSourceRelationshipsInput, WorldEntityUncheckedCreateWithoutSourceRelationshipsInput>
    connectOrCreate?: WorldEntityCreateOrConnectWithoutSourceRelationshipsInput
    upsert?: WorldEntityUpsertWithoutSourceRelationshipsInput
    connect?: WorldEntityWhereUniqueInput
    update?: XOR<XOR<WorldEntityUpdateToOneWithWhereWithoutSourceRelationshipsInput, WorldEntityUpdateWithoutSourceRelationshipsInput>, WorldEntityUncheckedUpdateWithoutSourceRelationshipsInput>
  }

  export type WorldEntityUpdateOneRequiredWithoutTargetRelationshipsNestedInput = {
    create?: XOR<WorldEntityCreateWithoutTargetRelationshipsInput, WorldEntityUncheckedCreateWithoutTargetRelationshipsInput>
    connectOrCreate?: WorldEntityCreateOrConnectWithoutTargetRelationshipsInput
    upsert?: WorldEntityUpsertWithoutTargetRelationshipsInput
    connect?: WorldEntityWhereUniqueInput
    update?: XOR<XOR<WorldEntityUpdateToOneWithWhereWithoutTargetRelationshipsInput, WorldEntityUpdateWithoutTargetRelationshipsInput>, WorldEntityUncheckedUpdateWithoutTargetRelationshipsInput>
  }

  export type WorldUpdateOneRequiredWithoutRelationshipsNestedInput = {
    create?: XOR<WorldCreateWithoutRelationshipsInput, WorldUncheckedCreateWithoutRelationshipsInput>
    connectOrCreate?: WorldCreateOrConnectWithoutRelationshipsInput
    upsert?: WorldUpsertWithoutRelationshipsInput
    connect?: WorldWhereUniqueInput
    update?: XOR<XOR<WorldUpdateToOneWithWhereWithoutRelationshipsInput, WorldUpdateWithoutRelationshipsInput>, WorldUncheckedUpdateWithoutRelationshipsInput>
  }

  export type WorldContentCreatetagsInput = {
    set: string[]
  }

  export type WorldCreateNestedOneWithoutContentInput = {
    create?: XOR<WorldCreateWithoutContentInput, WorldUncheckedCreateWithoutContentInput>
    connectOrCreate?: WorldCreateOrConnectWithoutContentInput
    connect?: WorldWhereUniqueInput
  }

  export type EnumContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContentType
  }

  export type WorldContentUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type WorldUpdateOneRequiredWithoutContentNestedInput = {
    create?: XOR<WorldCreateWithoutContentInput, WorldUncheckedCreateWithoutContentInput>
    connectOrCreate?: WorldCreateOrConnectWithoutContentInput
    upsert?: WorldUpsertWithoutContentInput
    connect?: WorldWhereUniqueInput
    update?: XOR<XOR<WorldUpdateToOneWithWhereWithoutContentInput, WorldUpdateWithoutContentInput>, WorldUncheckedUpdateWithoutContentInput>
  }

  export type UserProfileCreateNestedOneWithoutNotificationPreferencesInput = {
    create?: XOR<UserProfileCreateWithoutNotificationPreferencesInput, UserProfileUncheckedCreateWithoutNotificationPreferencesInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutNotificationPreferencesInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserProfileUpdateOneRequiredWithoutNotificationPreferencesNestedInput = {
    create?: XOR<UserProfileCreateWithoutNotificationPreferencesInput, UserProfileUncheckedCreateWithoutNotificationPreferencesInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutNotificationPreferencesInput
    upsert?: UserProfileUpsertWithoutNotificationPreferencesInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutNotificationPreferencesInput, UserProfileUpdateWithoutNotificationPreferencesInput>, UserProfileUncheckedUpdateWithoutNotificationPreferencesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumExperienceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelFilter<$PrismaModel> | $Enums.ExperienceLevel
  }

  export type NestedEnumCommunicationStyleFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationStyle | EnumCommunicationStyleFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationStyle[] | ListEnumCommunicationStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationStyle[] | ListEnumCommunicationStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationStyleFilter<$PrismaModel> | $Enums.CommunicationStyle
  }

  export type NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ExperienceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExperienceLevelFilter<$PrismaModel>
    _max?: NestedEnumExperienceLevelFilter<$PrismaModel>
  }

  export type NestedEnumCommunicationStyleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunicationStyle | EnumCommunicationStyleFieldRefInput<$PrismaModel>
    in?: $Enums.CommunicationStyle[] | ListEnumCommunicationStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunicationStyle[] | ListEnumCommunicationStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunicationStyleWithAggregatesFilter<$PrismaModel> | $Enums.CommunicationStyle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommunicationStyleFilter<$PrismaModel>
    _max?: NestedEnumCommunicationStyleFilter<$PrismaModel>
  }

  export type NestedEnumWorldStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorldStatus | EnumWorldStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorldStatus[] | ListEnumWorldStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorldStatus[] | ListEnumWorldStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorldStatusFilter<$PrismaModel> | $Enums.WorldStatus
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumWorldStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorldStatus | EnumWorldStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorldStatus[] | ListEnumWorldStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorldStatus[] | ListEnumWorldStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorldStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorldStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorldStatusFilter<$PrismaModel>
    _max?: NestedEnumWorldStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeFilter<$PrismaModel> | $Enums.EntityType
  }

  export type NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.EntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumEntityTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type NestedEnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    experienceLevel?: $Enums.ExperienceLevel
    preferredGenres?: UserProfileCreatepreferredGenresInput | string[]
    communicationStyle?: $Enums.CommunicationStyle
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationPreferences?: NotificationPreferencesCreateNestedOneWithoutUserProfileInput
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    experienceLevel?: $Enums.ExperienceLevel
    preferredGenres?: UserProfileCreatepreferredGenresInput | string[]
    communicationStyle?: $Enums.CommunicationStyle
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationPreferences?: NotificationPreferencesUncheckedCreateNestedOneWithoutUserProfileInput
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type WorldCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    genre?: string | null
    status?: $Enums.WorldStatus
    confidenceScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entities?: WorldEntityCreateNestedManyWithoutWorldInput
    content?: WorldContentCreateNestedManyWithoutWorldInput
    relationships?: EntityRelationshipCreateNestedManyWithoutWorldInput
  }

  export type WorldUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    genre?: string | null
    status?: $Enums.WorldStatus
    confidenceScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entities?: WorldEntityUncheckedCreateNestedManyWithoutWorldInput
    content?: WorldContentUncheckedCreateNestedManyWithoutWorldInput
    relationships?: EntityRelationshipUncheckedCreateNestedManyWithoutWorldInput
  }

  export type WorldCreateOrConnectWithoutUserInput = {
    where: WorldWhereUniqueInput
    create: XOR<WorldCreateWithoutUserInput, WorldUncheckedCreateWithoutUserInput>
  }

  export type WorldCreateManyUserInputEnvelope = {
    data: WorldCreateManyUserInput | WorldCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    preferredGenres?: UserProfileUpdatepreferredGenresInput | string[]
    communicationStyle?: EnumCommunicationStyleFieldUpdateOperationsInput | $Enums.CommunicationStyle
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationPreferences?: NotificationPreferencesUpdateOneWithoutUserProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    preferredGenres?: UserProfileUpdatepreferredGenresInput | string[]
    communicationStyle?: EnumCommunicationStyleFieldUpdateOperationsInput | $Enums.CommunicationStyle
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationPreferences?: NotificationPreferencesUncheckedUpdateOneWithoutUserProfileNestedInput
  }

  export type WorldUpsertWithWhereUniqueWithoutUserInput = {
    where: WorldWhereUniqueInput
    update: XOR<WorldUpdateWithoutUserInput, WorldUncheckedUpdateWithoutUserInput>
    create: XOR<WorldCreateWithoutUserInput, WorldUncheckedCreateWithoutUserInput>
  }

  export type WorldUpdateWithWhereUniqueWithoutUserInput = {
    where: WorldWhereUniqueInput
    data: XOR<WorldUpdateWithoutUserInput, WorldUncheckedUpdateWithoutUserInput>
  }

  export type WorldUpdateManyWithWhereWithoutUserInput = {
    where: WorldScalarWhereInput
    data: XOR<WorldUpdateManyMutationInput, WorldUncheckedUpdateManyWithoutUserInput>
  }

  export type WorldScalarWhereInput = {
    AND?: WorldScalarWhereInput | WorldScalarWhereInput[]
    OR?: WorldScalarWhereInput[]
    NOT?: WorldScalarWhereInput | WorldScalarWhereInput[]
    id?: StringFilter<"World"> | string
    userId?: StringFilter<"World"> | string
    title?: StringFilter<"World"> | string
    description?: StringNullableFilter<"World"> | string | null
    genre?: StringNullableFilter<"World"> | string | null
    status?: EnumWorldStatusFilter<"World"> | $Enums.WorldStatus
    confidenceScore?: FloatNullableFilter<"World"> | number | null
    createdAt?: DateTimeFilter<"World"> | Date | string
    updatedAt?: DateTimeFilter<"World"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    worlds?: WorldCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    worlds?: WorldUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    worlds?: WorldUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    worlds?: WorldUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NotificationPreferencesCreateWithoutUserProfileInput = {
    id?: string
    interventions?: boolean
    celebrations?: boolean
    suggestions?: boolean
    email?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationPreferencesUncheckedCreateWithoutUserProfileInput = {
    id?: string
    interventions?: boolean
    celebrations?: boolean
    suggestions?: boolean
    email?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationPreferencesCreateOrConnectWithoutUserProfileInput = {
    where: NotificationPreferencesWhereUniqueInput
    create: XOR<NotificationPreferencesCreateWithoutUserProfileInput, NotificationPreferencesUncheckedCreateWithoutUserProfileInput>
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    worlds?: WorldCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    worlds?: WorldUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type NotificationPreferencesUpsertWithoutUserProfileInput = {
    update: XOR<NotificationPreferencesUpdateWithoutUserProfileInput, NotificationPreferencesUncheckedUpdateWithoutUserProfileInput>
    create: XOR<NotificationPreferencesCreateWithoutUserProfileInput, NotificationPreferencesUncheckedCreateWithoutUserProfileInput>
    where?: NotificationPreferencesWhereInput
  }

  export type NotificationPreferencesUpdateToOneWithWhereWithoutUserProfileInput = {
    where?: NotificationPreferencesWhereInput
    data: XOR<NotificationPreferencesUpdateWithoutUserProfileInput, NotificationPreferencesUncheckedUpdateWithoutUserProfileInput>
  }

  export type NotificationPreferencesUpdateWithoutUserProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    interventions?: BoolFieldUpdateOperationsInput | boolean
    celebrations?: BoolFieldUpdateOperationsInput | boolean
    suggestions?: BoolFieldUpdateOperationsInput | boolean
    email?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationPreferencesUncheckedUpdateWithoutUserProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    interventions?: BoolFieldUpdateOperationsInput | boolean
    celebrations?: BoolFieldUpdateOperationsInput | boolean
    suggestions?: BoolFieldUpdateOperationsInput | boolean
    email?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    worlds?: WorldUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    worlds?: WorldUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWorldsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorldsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorldsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorldsInput, UserUncheckedCreateWithoutWorldsInput>
  }

  export type WorldEntityCreateWithoutWorldInput = {
    id?: string
    entityType: $Enums.EntityType
    name: string
    description?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceRelationships?: EntityRelationshipCreateNestedManyWithoutSourceEntityInput
    targetRelationships?: EntityRelationshipCreateNestedManyWithoutTargetEntityInput
  }

  export type WorldEntityUncheckedCreateWithoutWorldInput = {
    id?: string
    entityType: $Enums.EntityType
    name: string
    description?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceRelationships?: EntityRelationshipUncheckedCreateNestedManyWithoutSourceEntityInput
    targetRelationships?: EntityRelationshipUncheckedCreateNestedManyWithoutTargetEntityInput
  }

  export type WorldEntityCreateOrConnectWithoutWorldInput = {
    where: WorldEntityWhereUniqueInput
    create: XOR<WorldEntityCreateWithoutWorldInput, WorldEntityUncheckedCreateWithoutWorldInput>
  }

  export type WorldEntityCreateManyWorldInputEnvelope = {
    data: WorldEntityCreateManyWorldInput | WorldEntityCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type WorldContentCreateWithoutWorldInput = {
    id?: string
    contentType: $Enums.ContentType
    title?: string | null
    content: string
    tags?: WorldContentCreatetagsInput | string[]
    embeddingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorldContentUncheckedCreateWithoutWorldInput = {
    id?: string
    contentType: $Enums.ContentType
    title?: string | null
    content: string
    tags?: WorldContentCreatetagsInput | string[]
    embeddingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorldContentCreateOrConnectWithoutWorldInput = {
    where: WorldContentWhereUniqueInput
    create: XOR<WorldContentCreateWithoutWorldInput, WorldContentUncheckedCreateWithoutWorldInput>
  }

  export type WorldContentCreateManyWorldInputEnvelope = {
    data: WorldContentCreateManyWorldInput | WorldContentCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type EntityRelationshipCreateWithoutWorldInput = {
    id?: string
    relationshipType: string
    strength?: number | null
    description?: string | null
    createdAt?: Date | string
    sourceEntity: WorldEntityCreateNestedOneWithoutSourceRelationshipsInput
    targetEntity: WorldEntityCreateNestedOneWithoutTargetRelationshipsInput
  }

  export type EntityRelationshipUncheckedCreateWithoutWorldInput = {
    id?: string
    sourceEntityId: string
    targetEntityId: string
    relationshipType: string
    strength?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type EntityRelationshipCreateOrConnectWithoutWorldInput = {
    where: EntityRelationshipWhereUniqueInput
    create: XOR<EntityRelationshipCreateWithoutWorldInput, EntityRelationshipUncheckedCreateWithoutWorldInput>
  }

  export type EntityRelationshipCreateManyWorldInputEnvelope = {
    data: EntityRelationshipCreateManyWorldInput | EntityRelationshipCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorldsInput = {
    update: XOR<UserUpdateWithoutWorldsInput, UserUncheckedUpdateWithoutWorldsInput>
    create: XOR<UserCreateWithoutWorldsInput, UserUncheckedCreateWithoutWorldsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorldsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorldsInput, UserUncheckedUpdateWithoutWorldsInput>
  }

  export type UserUpdateWithoutWorldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type WorldEntityUpsertWithWhereUniqueWithoutWorldInput = {
    where: WorldEntityWhereUniqueInput
    update: XOR<WorldEntityUpdateWithoutWorldInput, WorldEntityUncheckedUpdateWithoutWorldInput>
    create: XOR<WorldEntityCreateWithoutWorldInput, WorldEntityUncheckedCreateWithoutWorldInput>
  }

  export type WorldEntityUpdateWithWhereUniqueWithoutWorldInput = {
    where: WorldEntityWhereUniqueInput
    data: XOR<WorldEntityUpdateWithoutWorldInput, WorldEntityUncheckedUpdateWithoutWorldInput>
  }

  export type WorldEntityUpdateManyWithWhereWithoutWorldInput = {
    where: WorldEntityScalarWhereInput
    data: XOR<WorldEntityUpdateManyMutationInput, WorldEntityUncheckedUpdateManyWithoutWorldInput>
  }

  export type WorldEntityScalarWhereInput = {
    AND?: WorldEntityScalarWhereInput | WorldEntityScalarWhereInput[]
    OR?: WorldEntityScalarWhereInput[]
    NOT?: WorldEntityScalarWhereInput | WorldEntityScalarWhereInput[]
    id?: StringFilter<"WorldEntity"> | string
    worldId?: StringFilter<"WorldEntity"> | string
    entityType?: EnumEntityTypeFilter<"WorldEntity"> | $Enums.EntityType
    name?: StringFilter<"WorldEntity"> | string
    description?: StringNullableFilter<"WorldEntity"> | string | null
    content?: JsonNullableFilter<"WorldEntity">
    embeddingId?: StringNullableFilter<"WorldEntity"> | string | null
    createdAt?: DateTimeFilter<"WorldEntity"> | Date | string
    updatedAt?: DateTimeFilter<"WorldEntity"> | Date | string
  }

  export type WorldContentUpsertWithWhereUniqueWithoutWorldInput = {
    where: WorldContentWhereUniqueInput
    update: XOR<WorldContentUpdateWithoutWorldInput, WorldContentUncheckedUpdateWithoutWorldInput>
    create: XOR<WorldContentCreateWithoutWorldInput, WorldContentUncheckedCreateWithoutWorldInput>
  }

  export type WorldContentUpdateWithWhereUniqueWithoutWorldInput = {
    where: WorldContentWhereUniqueInput
    data: XOR<WorldContentUpdateWithoutWorldInput, WorldContentUncheckedUpdateWithoutWorldInput>
  }

  export type WorldContentUpdateManyWithWhereWithoutWorldInput = {
    where: WorldContentScalarWhereInput
    data: XOR<WorldContentUpdateManyMutationInput, WorldContentUncheckedUpdateManyWithoutWorldInput>
  }

  export type WorldContentScalarWhereInput = {
    AND?: WorldContentScalarWhereInput | WorldContentScalarWhereInput[]
    OR?: WorldContentScalarWhereInput[]
    NOT?: WorldContentScalarWhereInput | WorldContentScalarWhereInput[]
    id?: StringFilter<"WorldContent"> | string
    worldId?: StringFilter<"WorldContent"> | string
    contentType?: EnumContentTypeFilter<"WorldContent"> | $Enums.ContentType
    title?: StringNullableFilter<"WorldContent"> | string | null
    content?: StringFilter<"WorldContent"> | string
    tags?: StringNullableListFilter<"WorldContent">
    embeddingId?: StringNullableFilter<"WorldContent"> | string | null
    createdAt?: DateTimeFilter<"WorldContent"> | Date | string
    updatedAt?: DateTimeFilter<"WorldContent"> | Date | string
  }

  export type EntityRelationshipUpsertWithWhereUniqueWithoutWorldInput = {
    where: EntityRelationshipWhereUniqueInput
    update: XOR<EntityRelationshipUpdateWithoutWorldInput, EntityRelationshipUncheckedUpdateWithoutWorldInput>
    create: XOR<EntityRelationshipCreateWithoutWorldInput, EntityRelationshipUncheckedCreateWithoutWorldInput>
  }

  export type EntityRelationshipUpdateWithWhereUniqueWithoutWorldInput = {
    where: EntityRelationshipWhereUniqueInput
    data: XOR<EntityRelationshipUpdateWithoutWorldInput, EntityRelationshipUncheckedUpdateWithoutWorldInput>
  }

  export type EntityRelationshipUpdateManyWithWhereWithoutWorldInput = {
    where: EntityRelationshipScalarWhereInput
    data: XOR<EntityRelationshipUpdateManyMutationInput, EntityRelationshipUncheckedUpdateManyWithoutWorldInput>
  }

  export type EntityRelationshipScalarWhereInput = {
    AND?: EntityRelationshipScalarWhereInput | EntityRelationshipScalarWhereInput[]
    OR?: EntityRelationshipScalarWhereInput[]
    NOT?: EntityRelationshipScalarWhereInput | EntityRelationshipScalarWhereInput[]
    id?: StringFilter<"EntityRelationship"> | string
    sourceEntityId?: StringFilter<"EntityRelationship"> | string
    targetEntityId?: StringFilter<"EntityRelationship"> | string
    worldId?: StringFilter<"EntityRelationship"> | string
    relationshipType?: StringFilter<"EntityRelationship"> | string
    strength?: FloatNullableFilter<"EntityRelationship"> | number | null
    description?: StringNullableFilter<"EntityRelationship"> | string | null
    createdAt?: DateTimeFilter<"EntityRelationship"> | Date | string
  }

  export type WorldCreateWithoutEntitiesInput = {
    id?: string
    title: string
    description?: string | null
    genre?: string | null
    status?: $Enums.WorldStatus
    confidenceScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorldsInput
    content?: WorldContentCreateNestedManyWithoutWorldInput
    relationships?: EntityRelationshipCreateNestedManyWithoutWorldInput
  }

  export type WorldUncheckedCreateWithoutEntitiesInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    genre?: string | null
    status?: $Enums.WorldStatus
    confidenceScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: WorldContentUncheckedCreateNestedManyWithoutWorldInput
    relationships?: EntityRelationshipUncheckedCreateNestedManyWithoutWorldInput
  }

  export type WorldCreateOrConnectWithoutEntitiesInput = {
    where: WorldWhereUniqueInput
    create: XOR<WorldCreateWithoutEntitiesInput, WorldUncheckedCreateWithoutEntitiesInput>
  }

  export type EntityRelationshipCreateWithoutSourceEntityInput = {
    id?: string
    relationshipType: string
    strength?: number | null
    description?: string | null
    createdAt?: Date | string
    targetEntity: WorldEntityCreateNestedOneWithoutTargetRelationshipsInput
    world: WorldCreateNestedOneWithoutRelationshipsInput
  }

  export type EntityRelationshipUncheckedCreateWithoutSourceEntityInput = {
    id?: string
    targetEntityId: string
    worldId: string
    relationshipType: string
    strength?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type EntityRelationshipCreateOrConnectWithoutSourceEntityInput = {
    where: EntityRelationshipWhereUniqueInput
    create: XOR<EntityRelationshipCreateWithoutSourceEntityInput, EntityRelationshipUncheckedCreateWithoutSourceEntityInput>
  }

  export type EntityRelationshipCreateManySourceEntityInputEnvelope = {
    data: EntityRelationshipCreateManySourceEntityInput | EntityRelationshipCreateManySourceEntityInput[]
    skipDuplicates?: boolean
  }

  export type EntityRelationshipCreateWithoutTargetEntityInput = {
    id?: string
    relationshipType: string
    strength?: number | null
    description?: string | null
    createdAt?: Date | string
    sourceEntity: WorldEntityCreateNestedOneWithoutSourceRelationshipsInput
    world: WorldCreateNestedOneWithoutRelationshipsInput
  }

  export type EntityRelationshipUncheckedCreateWithoutTargetEntityInput = {
    id?: string
    sourceEntityId: string
    worldId: string
    relationshipType: string
    strength?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type EntityRelationshipCreateOrConnectWithoutTargetEntityInput = {
    where: EntityRelationshipWhereUniqueInput
    create: XOR<EntityRelationshipCreateWithoutTargetEntityInput, EntityRelationshipUncheckedCreateWithoutTargetEntityInput>
  }

  export type EntityRelationshipCreateManyTargetEntityInputEnvelope = {
    data: EntityRelationshipCreateManyTargetEntityInput | EntityRelationshipCreateManyTargetEntityInput[]
    skipDuplicates?: boolean
  }

  export type WorldUpsertWithoutEntitiesInput = {
    update: XOR<WorldUpdateWithoutEntitiesInput, WorldUncheckedUpdateWithoutEntitiesInput>
    create: XOR<WorldCreateWithoutEntitiesInput, WorldUncheckedCreateWithoutEntitiesInput>
    where?: WorldWhereInput
  }

  export type WorldUpdateToOneWithWhereWithoutEntitiesInput = {
    where?: WorldWhereInput
    data: XOR<WorldUpdateWithoutEntitiesInput, WorldUncheckedUpdateWithoutEntitiesInput>
  }

  export type WorldUpdateWithoutEntitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorldStatusFieldUpdateOperationsInput | $Enums.WorldStatus
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorldsNestedInput
    content?: WorldContentUpdateManyWithoutWorldNestedInput
    relationships?: EntityRelationshipUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateWithoutEntitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorldStatusFieldUpdateOperationsInput | $Enums.WorldStatus
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: WorldContentUncheckedUpdateManyWithoutWorldNestedInput
    relationships?: EntityRelationshipUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type EntityRelationshipUpsertWithWhereUniqueWithoutSourceEntityInput = {
    where: EntityRelationshipWhereUniqueInput
    update: XOR<EntityRelationshipUpdateWithoutSourceEntityInput, EntityRelationshipUncheckedUpdateWithoutSourceEntityInput>
    create: XOR<EntityRelationshipCreateWithoutSourceEntityInput, EntityRelationshipUncheckedCreateWithoutSourceEntityInput>
  }

  export type EntityRelationshipUpdateWithWhereUniqueWithoutSourceEntityInput = {
    where: EntityRelationshipWhereUniqueInput
    data: XOR<EntityRelationshipUpdateWithoutSourceEntityInput, EntityRelationshipUncheckedUpdateWithoutSourceEntityInput>
  }

  export type EntityRelationshipUpdateManyWithWhereWithoutSourceEntityInput = {
    where: EntityRelationshipScalarWhereInput
    data: XOR<EntityRelationshipUpdateManyMutationInput, EntityRelationshipUncheckedUpdateManyWithoutSourceEntityInput>
  }

  export type EntityRelationshipUpsertWithWhereUniqueWithoutTargetEntityInput = {
    where: EntityRelationshipWhereUniqueInput
    update: XOR<EntityRelationshipUpdateWithoutTargetEntityInput, EntityRelationshipUncheckedUpdateWithoutTargetEntityInput>
    create: XOR<EntityRelationshipCreateWithoutTargetEntityInput, EntityRelationshipUncheckedCreateWithoutTargetEntityInput>
  }

  export type EntityRelationshipUpdateWithWhereUniqueWithoutTargetEntityInput = {
    where: EntityRelationshipWhereUniqueInput
    data: XOR<EntityRelationshipUpdateWithoutTargetEntityInput, EntityRelationshipUncheckedUpdateWithoutTargetEntityInput>
  }

  export type EntityRelationshipUpdateManyWithWhereWithoutTargetEntityInput = {
    where: EntityRelationshipScalarWhereInput
    data: XOR<EntityRelationshipUpdateManyMutationInput, EntityRelationshipUncheckedUpdateManyWithoutTargetEntityInput>
  }

  export type WorldEntityCreateWithoutSourceRelationshipsInput = {
    id?: string
    entityType: $Enums.EntityType
    name: string
    description?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    world: WorldCreateNestedOneWithoutEntitiesInput
    targetRelationships?: EntityRelationshipCreateNestedManyWithoutTargetEntityInput
  }

  export type WorldEntityUncheckedCreateWithoutSourceRelationshipsInput = {
    id?: string
    worldId: string
    entityType: $Enums.EntityType
    name: string
    description?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    targetRelationships?: EntityRelationshipUncheckedCreateNestedManyWithoutTargetEntityInput
  }

  export type WorldEntityCreateOrConnectWithoutSourceRelationshipsInput = {
    where: WorldEntityWhereUniqueInput
    create: XOR<WorldEntityCreateWithoutSourceRelationshipsInput, WorldEntityUncheckedCreateWithoutSourceRelationshipsInput>
  }

  export type WorldEntityCreateWithoutTargetRelationshipsInput = {
    id?: string
    entityType: $Enums.EntityType
    name: string
    description?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    world: WorldCreateNestedOneWithoutEntitiesInput
    sourceRelationships?: EntityRelationshipCreateNestedManyWithoutSourceEntityInput
  }

  export type WorldEntityUncheckedCreateWithoutTargetRelationshipsInput = {
    id?: string
    worldId: string
    entityType: $Enums.EntityType
    name: string
    description?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceRelationships?: EntityRelationshipUncheckedCreateNestedManyWithoutSourceEntityInput
  }

  export type WorldEntityCreateOrConnectWithoutTargetRelationshipsInput = {
    where: WorldEntityWhereUniqueInput
    create: XOR<WorldEntityCreateWithoutTargetRelationshipsInput, WorldEntityUncheckedCreateWithoutTargetRelationshipsInput>
  }

  export type WorldCreateWithoutRelationshipsInput = {
    id?: string
    title: string
    description?: string | null
    genre?: string | null
    status?: $Enums.WorldStatus
    confidenceScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorldsInput
    entities?: WorldEntityCreateNestedManyWithoutWorldInput
    content?: WorldContentCreateNestedManyWithoutWorldInput
  }

  export type WorldUncheckedCreateWithoutRelationshipsInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    genre?: string | null
    status?: $Enums.WorldStatus
    confidenceScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entities?: WorldEntityUncheckedCreateNestedManyWithoutWorldInput
    content?: WorldContentUncheckedCreateNestedManyWithoutWorldInput
  }

  export type WorldCreateOrConnectWithoutRelationshipsInput = {
    where: WorldWhereUniqueInput
    create: XOR<WorldCreateWithoutRelationshipsInput, WorldUncheckedCreateWithoutRelationshipsInput>
  }

  export type WorldEntityUpsertWithoutSourceRelationshipsInput = {
    update: XOR<WorldEntityUpdateWithoutSourceRelationshipsInput, WorldEntityUncheckedUpdateWithoutSourceRelationshipsInput>
    create: XOR<WorldEntityCreateWithoutSourceRelationshipsInput, WorldEntityUncheckedCreateWithoutSourceRelationshipsInput>
    where?: WorldEntityWhereInput
  }

  export type WorldEntityUpdateToOneWithWhereWithoutSourceRelationshipsInput = {
    where?: WorldEntityWhereInput
    data: XOR<WorldEntityUpdateWithoutSourceRelationshipsInput, WorldEntityUncheckedUpdateWithoutSourceRelationshipsInput>
  }

  export type WorldEntityUpdateWithoutSourceRelationshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    world?: WorldUpdateOneRequiredWithoutEntitiesNestedInput
    targetRelationships?: EntityRelationshipUpdateManyWithoutTargetEntityNestedInput
  }

  export type WorldEntityUncheckedUpdateWithoutSourceRelationshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetRelationships?: EntityRelationshipUncheckedUpdateManyWithoutTargetEntityNestedInput
  }

  export type WorldEntityUpsertWithoutTargetRelationshipsInput = {
    update: XOR<WorldEntityUpdateWithoutTargetRelationshipsInput, WorldEntityUncheckedUpdateWithoutTargetRelationshipsInput>
    create: XOR<WorldEntityCreateWithoutTargetRelationshipsInput, WorldEntityUncheckedCreateWithoutTargetRelationshipsInput>
    where?: WorldEntityWhereInput
  }

  export type WorldEntityUpdateToOneWithWhereWithoutTargetRelationshipsInput = {
    where?: WorldEntityWhereInput
    data: XOR<WorldEntityUpdateWithoutTargetRelationshipsInput, WorldEntityUncheckedUpdateWithoutTargetRelationshipsInput>
  }

  export type WorldEntityUpdateWithoutTargetRelationshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    world?: WorldUpdateOneRequiredWithoutEntitiesNestedInput
    sourceRelationships?: EntityRelationshipUpdateManyWithoutSourceEntityNestedInput
  }

  export type WorldEntityUncheckedUpdateWithoutTargetRelationshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceRelationships?: EntityRelationshipUncheckedUpdateManyWithoutSourceEntityNestedInput
  }

  export type WorldUpsertWithoutRelationshipsInput = {
    update: XOR<WorldUpdateWithoutRelationshipsInput, WorldUncheckedUpdateWithoutRelationshipsInput>
    create: XOR<WorldCreateWithoutRelationshipsInput, WorldUncheckedCreateWithoutRelationshipsInput>
    where?: WorldWhereInput
  }

  export type WorldUpdateToOneWithWhereWithoutRelationshipsInput = {
    where?: WorldWhereInput
    data: XOR<WorldUpdateWithoutRelationshipsInput, WorldUncheckedUpdateWithoutRelationshipsInput>
  }

  export type WorldUpdateWithoutRelationshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorldStatusFieldUpdateOperationsInput | $Enums.WorldStatus
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorldsNestedInput
    entities?: WorldEntityUpdateManyWithoutWorldNestedInput
    content?: WorldContentUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateWithoutRelationshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorldStatusFieldUpdateOperationsInput | $Enums.WorldStatus
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entities?: WorldEntityUncheckedUpdateManyWithoutWorldNestedInput
    content?: WorldContentUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type WorldCreateWithoutContentInput = {
    id?: string
    title: string
    description?: string | null
    genre?: string | null
    status?: $Enums.WorldStatus
    confidenceScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorldsInput
    entities?: WorldEntityCreateNestedManyWithoutWorldInput
    relationships?: EntityRelationshipCreateNestedManyWithoutWorldInput
  }

  export type WorldUncheckedCreateWithoutContentInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    genre?: string | null
    status?: $Enums.WorldStatus
    confidenceScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entities?: WorldEntityUncheckedCreateNestedManyWithoutWorldInput
    relationships?: EntityRelationshipUncheckedCreateNestedManyWithoutWorldInput
  }

  export type WorldCreateOrConnectWithoutContentInput = {
    where: WorldWhereUniqueInput
    create: XOR<WorldCreateWithoutContentInput, WorldUncheckedCreateWithoutContentInput>
  }

  export type WorldUpsertWithoutContentInput = {
    update: XOR<WorldUpdateWithoutContentInput, WorldUncheckedUpdateWithoutContentInput>
    create: XOR<WorldCreateWithoutContentInput, WorldUncheckedCreateWithoutContentInput>
    where?: WorldWhereInput
  }

  export type WorldUpdateToOneWithWhereWithoutContentInput = {
    where?: WorldWhereInput
    data: XOR<WorldUpdateWithoutContentInput, WorldUncheckedUpdateWithoutContentInput>
  }

  export type WorldUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorldStatusFieldUpdateOperationsInput | $Enums.WorldStatus
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorldsNestedInput
    entities?: WorldEntityUpdateManyWithoutWorldNestedInput
    relationships?: EntityRelationshipUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorldStatusFieldUpdateOperationsInput | $Enums.WorldStatus
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entities?: WorldEntityUncheckedUpdateManyWithoutWorldNestedInput
    relationships?: EntityRelationshipUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type UserProfileCreateWithoutNotificationPreferencesInput = {
    id?: string
    experienceLevel?: $Enums.ExperienceLevel
    preferredGenres?: UserProfileCreatepreferredGenresInput | string[]
    communicationStyle?: $Enums.CommunicationStyle
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateWithoutNotificationPreferencesInput = {
    id?: string
    userId: string
    experienceLevel?: $Enums.ExperienceLevel
    preferredGenres?: UserProfileCreatepreferredGenresInput | string[]
    communicationStyle?: $Enums.CommunicationStyle
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileCreateOrConnectWithoutNotificationPreferencesInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutNotificationPreferencesInput, UserProfileUncheckedCreateWithoutNotificationPreferencesInput>
  }

  export type UserProfileUpsertWithoutNotificationPreferencesInput = {
    update: XOR<UserProfileUpdateWithoutNotificationPreferencesInput, UserProfileUncheckedUpdateWithoutNotificationPreferencesInput>
    create: XOR<UserProfileCreateWithoutNotificationPreferencesInput, UserProfileUncheckedCreateWithoutNotificationPreferencesInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutNotificationPreferencesInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutNotificationPreferencesInput, UserProfileUncheckedUpdateWithoutNotificationPreferencesInput>
  }

  export type UserProfileUpdateWithoutNotificationPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    preferredGenres?: UserProfileUpdatepreferredGenresInput | string[]
    communicationStyle?: EnumCommunicationStyleFieldUpdateOperationsInput | $Enums.CommunicationStyle
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutNotificationPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    experienceLevel?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    preferredGenres?: UserProfileUpdatepreferredGenresInput | string[]
    communicationStyle?: EnumCommunicationStyleFieldUpdateOperationsInput | $Enums.CommunicationStyle
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type WorldCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    genre?: string | null
    status?: $Enums.WorldStatus
    confidenceScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorldUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorldStatusFieldUpdateOperationsInput | $Enums.WorldStatus
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entities?: WorldEntityUpdateManyWithoutWorldNestedInput
    content?: WorldContentUpdateManyWithoutWorldNestedInput
    relationships?: EntityRelationshipUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorldStatusFieldUpdateOperationsInput | $Enums.WorldStatus
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entities?: WorldEntityUncheckedUpdateManyWithoutWorldNestedInput
    content?: WorldContentUncheckedUpdateManyWithoutWorldNestedInput
    relationships?: EntityRelationshipUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorldStatusFieldUpdateOperationsInput | $Enums.WorldStatus
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorldEntityCreateManyWorldInput = {
    id?: string
    entityType: $Enums.EntityType
    name: string
    description?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorldContentCreateManyWorldInput = {
    id?: string
    contentType: $Enums.ContentType
    title?: string | null
    content: string
    tags?: WorldContentCreatetagsInput | string[]
    embeddingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntityRelationshipCreateManyWorldInput = {
    id?: string
    sourceEntityId: string
    targetEntityId: string
    relationshipType: string
    strength?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type WorldEntityUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceRelationships?: EntityRelationshipUpdateManyWithoutSourceEntityNestedInput
    targetRelationships?: EntityRelationshipUpdateManyWithoutTargetEntityNestedInput
  }

  export type WorldEntityUncheckedUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceRelationships?: EntityRelationshipUncheckedUpdateManyWithoutSourceEntityNestedInput
    targetRelationships?: EntityRelationshipUncheckedUpdateManyWithoutTargetEntityNestedInput
  }

  export type WorldEntityUncheckedUpdateManyWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    embeddingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorldContentUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    tags?: WorldContentUpdatetagsInput | string[]
    embeddingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorldContentUncheckedUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    tags?: WorldContentUpdatetagsInput | string[]
    embeddingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorldContentUncheckedUpdateManyWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    tags?: WorldContentUpdatetagsInput | string[]
    embeddingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityRelationshipUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationshipType?: StringFieldUpdateOperationsInput | string
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceEntity?: WorldEntityUpdateOneRequiredWithoutSourceRelationshipsNestedInput
    targetEntity?: WorldEntityUpdateOneRequiredWithoutTargetRelationshipsNestedInput
  }

  export type EntityRelationshipUncheckedUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceEntityId?: StringFieldUpdateOperationsInput | string
    targetEntityId?: StringFieldUpdateOperationsInput | string
    relationshipType?: StringFieldUpdateOperationsInput | string
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityRelationshipUncheckedUpdateManyWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceEntityId?: StringFieldUpdateOperationsInput | string
    targetEntityId?: StringFieldUpdateOperationsInput | string
    relationshipType?: StringFieldUpdateOperationsInput | string
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityRelationshipCreateManySourceEntityInput = {
    id?: string
    targetEntityId: string
    worldId: string
    relationshipType: string
    strength?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type EntityRelationshipCreateManyTargetEntityInput = {
    id?: string
    sourceEntityId: string
    worldId: string
    relationshipType: string
    strength?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type EntityRelationshipUpdateWithoutSourceEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationshipType?: StringFieldUpdateOperationsInput | string
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetEntity?: WorldEntityUpdateOneRequiredWithoutTargetRelationshipsNestedInput
    world?: WorldUpdateOneRequiredWithoutRelationshipsNestedInput
  }

  export type EntityRelationshipUncheckedUpdateWithoutSourceEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetEntityId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    relationshipType?: StringFieldUpdateOperationsInput | string
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityRelationshipUncheckedUpdateManyWithoutSourceEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetEntityId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    relationshipType?: StringFieldUpdateOperationsInput | string
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityRelationshipUpdateWithoutTargetEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationshipType?: StringFieldUpdateOperationsInput | string
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceEntity?: WorldEntityUpdateOneRequiredWithoutSourceRelationshipsNestedInput
    world?: WorldUpdateOneRequiredWithoutRelationshipsNestedInput
  }

  export type EntityRelationshipUncheckedUpdateWithoutTargetEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceEntityId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    relationshipType?: StringFieldUpdateOperationsInput | string
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityRelationshipUncheckedUpdateManyWithoutTargetEntityInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceEntityId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    relationshipType?: StringFieldUpdateOperationsInput | string
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorldCountOutputTypeDefaultArgs instead
     */
    export type WorldCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorldCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorldEntityCountOutputTypeDefaultArgs instead
     */
    export type WorldEntityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorldEntityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserProfileDefaultArgs instead
     */
    export type UserProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorldDefaultArgs instead
     */
    export type WorldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorldDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorldEntityDefaultArgs instead
     */
    export type WorldEntityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorldEntityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EntityRelationshipDefaultArgs instead
     */
    export type EntityRelationshipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntityRelationshipDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorldContentDefaultArgs instead
     */
    export type WorldContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorldContentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationPreferencesDefaultArgs instead
     */
    export type NotificationPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationPreferencesDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}