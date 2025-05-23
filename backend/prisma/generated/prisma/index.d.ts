
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model PlayerProfile
 * 
 */
export type PlayerProfile = $Result.DefaultSelection<Prisma.$PlayerProfilePayload>
/**
 * Model RatingHistory
 * 
 */
export type RatingHistory = $Result.DefaultSelection<Prisma.$RatingHistoryPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model MatchInvite
 * 
 */
export type MatchInvite = $Result.DefaultSelection<Prisma.$MatchInvitePayload>
/**
 * Model ExecutionHistory
 * 
 */
export type ExecutionHistory = $Result.DefaultSelection<Prisma.$ExecutionHistoryPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PlayerStatus: {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
  PLAYING: 'PLAYING'
};

export type PlayerStatus = (typeof PlayerStatus)[keyof typeof PlayerStatus]


export const RatingReason: {
  MATCH_WIN: 'MATCH_WIN',
  MATCH_LOSS: 'MATCH_LOSS'
};

export type RatingReason = (typeof RatingReason)[keyof typeof RatingReason]


export const MatchStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED'
};

export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus]


export const NotificationType: {
  MATCH_FOUND: 'MATCH_FOUND',
  MATCH_INVITATION: 'MATCH_INVITATION',
  ELO_CHANGE: 'ELO_CHANGE',
  RANK_UP: 'RANK_UP'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const MatchInviteStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED'
};

export type MatchInviteStatus = (typeof MatchInviteStatus)[keyof typeof MatchInviteStatus]

}

export type PlayerStatus = $Enums.PlayerStatus

export const PlayerStatus: typeof $Enums.PlayerStatus

export type RatingReason = $Enums.RatingReason

export const RatingReason: typeof $Enums.RatingReason

export type MatchStatus = $Enums.MatchStatus

export const MatchStatus: typeof $Enums.MatchStatus

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type MatchInviteStatus = $Enums.MatchInviteStatus

export const MatchInviteStatus: typeof $Enums.MatchInviteStatus

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerProfile`: Exposes CRUD operations for the **PlayerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerProfiles
    * const playerProfiles = await prisma.playerProfile.findMany()
    * ```
    */
  get playerProfile(): Prisma.PlayerProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ratingHistory`: Exposes CRUD operations for the **RatingHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RatingHistories
    * const ratingHistories = await prisma.ratingHistory.findMany()
    * ```
    */
  get ratingHistory(): Prisma.RatingHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchInvite`: Exposes CRUD operations for the **MatchInvite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchInvites
    * const matchInvites = await prisma.matchInvite.findMany()
    * ```
    */
  get matchInvite(): Prisma.MatchInviteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.executionHistory`: Exposes CRUD operations for the **ExecutionHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExecutionHistories
    * const executionHistories = await prisma.executionHistory.findMany()
    * ```
    */
  get executionHistory(): Prisma.ExecutionHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    PlayerProfile: 'PlayerProfile',
    RatingHistory: 'RatingHistory',
    Match: 'Match',
    Notification: 'Notification',
    MatchInvite: 'MatchInvite',
    ExecutionHistory: 'ExecutionHistory',
    ChatMessage: 'ChatMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "playerProfile" | "ratingHistory" | "match" | "notification" | "matchInvite" | "executionHistory" | "chatMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PlayerProfile: {
        payload: Prisma.$PlayerProfilePayload<ExtArgs>
        fields: Prisma.PlayerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          findFirst: {
            args: Prisma.PlayerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          findMany: {
            args: Prisma.PlayerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>[]
          }
          create: {
            args: Prisma.PlayerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          createMany: {
            args: Prisma.PlayerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>[]
          }
          delete: {
            args: Prisma.PlayerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          update: {
            args: Prisma.PlayerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          deleteMany: {
            args: Prisma.PlayerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>[]
          }
          upsert: {
            args: Prisma.PlayerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          aggregate: {
            args: Prisma.PlayerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerProfile>
          }
          groupBy: {
            args: Prisma.PlayerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerProfileCountAggregateOutputType> | number
          }
        }
      }
      RatingHistory: {
        payload: Prisma.$RatingHistoryPayload<ExtArgs>
        fields: Prisma.RatingHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingHistoryPayload>
          }
          findFirst: {
            args: Prisma.RatingHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingHistoryPayload>
          }
          findMany: {
            args: Prisma.RatingHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingHistoryPayload>[]
          }
          create: {
            args: Prisma.RatingHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingHistoryPayload>
          }
          createMany: {
            args: Prisma.RatingHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingHistoryPayload>[]
          }
          delete: {
            args: Prisma.RatingHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingHistoryPayload>
          }
          update: {
            args: Prisma.RatingHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingHistoryPayload>
          }
          deleteMany: {
            args: Prisma.RatingHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingHistoryPayload>[]
          }
          upsert: {
            args: Prisma.RatingHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingHistoryPayload>
          }
          aggregate: {
            args: Prisma.RatingHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRatingHistory>
          }
          groupBy: {
            args: Prisma.RatingHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<RatingHistoryCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      MatchInvite: {
        payload: Prisma.$MatchInvitePayload<ExtArgs>
        fields: Prisma.MatchInviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchInviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchInvitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchInviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchInvitePayload>
          }
          findFirst: {
            args: Prisma.MatchInviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchInvitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchInviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchInvitePayload>
          }
          findMany: {
            args: Prisma.MatchInviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchInvitePayload>[]
          }
          create: {
            args: Prisma.MatchInviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchInvitePayload>
          }
          createMany: {
            args: Prisma.MatchInviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchInviteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchInvitePayload>[]
          }
          delete: {
            args: Prisma.MatchInviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchInvitePayload>
          }
          update: {
            args: Prisma.MatchInviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchInvitePayload>
          }
          deleteMany: {
            args: Prisma.MatchInviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchInviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchInviteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchInvitePayload>[]
          }
          upsert: {
            args: Prisma.MatchInviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchInvitePayload>
          }
          aggregate: {
            args: Prisma.MatchInviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchInvite>
          }
          groupBy: {
            args: Prisma.MatchInviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchInviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchInviteCountArgs<ExtArgs>
            result: $Utils.Optional<MatchInviteCountAggregateOutputType> | number
          }
        }
      }
      ExecutionHistory: {
        payload: Prisma.$ExecutionHistoryPayload<ExtArgs>
        fields: Prisma.ExecutionHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutionHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutionHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>
          }
          findFirst: {
            args: Prisma.ExecutionHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutionHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>
          }
          findMany: {
            args: Prisma.ExecutionHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>[]
          }
          create: {
            args: Prisma.ExecutionHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>
          }
          createMany: {
            args: Prisma.ExecutionHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExecutionHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>[]
          }
          delete: {
            args: Prisma.ExecutionHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>
          }
          update: {
            args: Prisma.ExecutionHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ExecutionHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutionHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExecutionHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ExecutionHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>
          }
          aggregate: {
            args: Prisma.ExecutionHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecutionHistory>
          }
          groupBy: {
            args: Prisma.ExecutionHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutionHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutionHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutionHistoryCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    playerProfile?: PlayerProfileOmit
    ratingHistory?: RatingHistoryOmit
    match?: MatchOmit
    notification?: NotificationOmit
    matchInvite?: MatchInviteOmit
    executionHistory?: ExecutionHistoryOmit
    chatMessage?: ChatMessageOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
    PlayerProfile: number
    RatingHistory: number
    matchesAsPlayer1: number
    matchesAsPlayer2: number
    matchesAsWinner: number
    Notification: number
    sentInvites: number
    receivedInvites: number
    ExecutionHistory: number
    ChatMessage: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PlayerProfile?: boolean | UserCountOutputTypeCountPlayerProfileArgs
    RatingHistory?: boolean | UserCountOutputTypeCountRatingHistoryArgs
    matchesAsPlayer1?: boolean | UserCountOutputTypeCountMatchesAsPlayer1Args
    matchesAsPlayer2?: boolean | UserCountOutputTypeCountMatchesAsPlayer2Args
    matchesAsWinner?: boolean | UserCountOutputTypeCountMatchesAsWinnerArgs
    Notification?: boolean | UserCountOutputTypeCountNotificationArgs
    sentInvites?: boolean | UserCountOutputTypeCountSentInvitesArgs
    receivedInvites?: boolean | UserCountOutputTypeCountReceivedInvitesArgs
    ExecutionHistory?: boolean | UserCountOutputTypeCountExecutionHistoryArgs
    ChatMessage?: boolean | UserCountOutputTypeCountChatMessageArgs
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
  export type UserCountOutputTypeCountPlayerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerProfileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesAsWinnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchInviteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchInviteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExecutionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Count Type MatchCountOutputType
   */

  export type MatchCountOutputType = {
    MatchInvite: number
    ExecutionHistory: number
    ChatMessage: number
  }

  export type MatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MatchInvite?: boolean | MatchCountOutputTypeCountMatchInviteArgs
    ExecutionHistory?: boolean | MatchCountOutputTypeCountExecutionHistoryArgs
    ChatMessage?: boolean | MatchCountOutputTypeCountChatMessageArgs
  }

  // Custom InputTypes
  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchCountOutputType
     */
    select?: MatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountMatchInviteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchInviteWhereInput
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountExecutionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionHistoryWhereInput
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
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
    first_name: string | null
    last_name: string | null
    avatar_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
    avatar_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    first_name: number
    last_name: number
    avatar_url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    avatar_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    avatar_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    avatar_url?: true
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
    first_name: string
    last_name: string
    avatar_url: string
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
    first_name?: boolean
    last_name?: boolean
    avatar_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PlayerProfile?: boolean | User$PlayerProfileArgs<ExtArgs>
    RatingHistory?: boolean | User$RatingHistoryArgs<ExtArgs>
    matchesAsPlayer1?: boolean | User$matchesAsPlayer1Args<ExtArgs>
    matchesAsPlayer2?: boolean | User$matchesAsPlayer2Args<ExtArgs>
    matchesAsWinner?: boolean | User$matchesAsWinnerArgs<ExtArgs>
    Notification?: boolean | User$NotificationArgs<ExtArgs>
    sentInvites?: boolean | User$sentInvitesArgs<ExtArgs>
    receivedInvites?: boolean | User$receivedInvitesArgs<ExtArgs>
    ExecutionHistory?: boolean | User$ExecutionHistoryArgs<ExtArgs>
    ChatMessage?: boolean | User$ChatMessageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    avatar_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    avatar_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    avatar_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "first_name" | "last_name" | "avatar_url" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PlayerProfile?: boolean | User$PlayerProfileArgs<ExtArgs>
    RatingHistory?: boolean | User$RatingHistoryArgs<ExtArgs>
    matchesAsPlayer1?: boolean | User$matchesAsPlayer1Args<ExtArgs>
    matchesAsPlayer2?: boolean | User$matchesAsPlayer2Args<ExtArgs>
    matchesAsWinner?: boolean | User$matchesAsWinnerArgs<ExtArgs>
    Notification?: boolean | User$NotificationArgs<ExtArgs>
    sentInvites?: boolean | User$sentInvitesArgs<ExtArgs>
    receivedInvites?: boolean | User$receivedInvitesArgs<ExtArgs>
    ExecutionHistory?: boolean | User$ExecutionHistoryArgs<ExtArgs>
    ChatMessage?: boolean | User$ChatMessageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      PlayerProfile: Prisma.$PlayerProfilePayload<ExtArgs>[]
      RatingHistory: Prisma.$RatingHistoryPayload<ExtArgs>[]
      matchesAsPlayer1: Prisma.$MatchPayload<ExtArgs>[]
      matchesAsPlayer2: Prisma.$MatchPayload<ExtArgs>[]
      matchesAsWinner: Prisma.$MatchPayload<ExtArgs>[]
      Notification: Prisma.$NotificationPayload<ExtArgs>[]
      sentInvites: Prisma.$MatchInvitePayload<ExtArgs>[]
      receivedInvites: Prisma.$MatchInvitePayload<ExtArgs>[]
      ExecutionHistory: Prisma.$ExecutionHistoryPayload<ExtArgs>[]
      ChatMessage: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      first_name: string
      last_name: string
      avatar_url: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PlayerProfile<T extends User$PlayerProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$PlayerProfileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RatingHistory<T extends User$RatingHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$RatingHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesAsPlayer1<T extends User$matchesAsPlayer1Args<ExtArgs> = {}>(args?: Subset<T, User$matchesAsPlayer1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesAsPlayer2<T extends User$matchesAsPlayer2Args<ExtArgs> = {}>(args?: Subset<T, User$matchesAsPlayer2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesAsWinner<T extends User$matchesAsWinnerArgs<ExtArgs> = {}>(args?: Subset<T, User$matchesAsWinnerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Notification<T extends User$NotificationArgs<ExtArgs> = {}>(args?: Subset<T, User$NotificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentInvites<T extends User$sentInvitesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentInvitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedInvites<T extends User$receivedInvitesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedInvitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ExecutionHistory<T extends User$ExecutionHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$ExecutionHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ChatMessage<T extends User$ChatMessageArgs<ExtArgs> = {}>(args?: Subset<T, User$ChatMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly avatar_url: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.PlayerProfile
   */
  export type User$PlayerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    where?: PlayerProfileWhereInput
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    cursor?: PlayerProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerProfileScalarFieldEnum | PlayerProfileScalarFieldEnum[]
  }

  /**
   * User.RatingHistory
   */
  export type User$RatingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingHistory
     */
    select?: RatingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingHistory
     */
    omit?: RatingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingHistoryInclude<ExtArgs> | null
    where?: RatingHistoryWhereInput
    orderBy?: RatingHistoryOrderByWithRelationInput | RatingHistoryOrderByWithRelationInput[]
    cursor?: RatingHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingHistoryScalarFieldEnum | RatingHistoryScalarFieldEnum[]
  }

  /**
   * User.matchesAsPlayer1
   */
  export type User$matchesAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.matchesAsPlayer2
   */
  export type User$matchesAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.matchesAsWinner
   */
  export type User$matchesAsWinnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.Notification
   */
  export type User$NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.sentInvites
   */
  export type User$sentInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchInvite
     */
    select?: MatchInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchInvite
     */
    omit?: MatchInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInviteInclude<ExtArgs> | null
    where?: MatchInviteWhereInput
    orderBy?: MatchInviteOrderByWithRelationInput | MatchInviteOrderByWithRelationInput[]
    cursor?: MatchInviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchInviteScalarFieldEnum | MatchInviteScalarFieldEnum[]
  }

  /**
   * User.receivedInvites
   */
  export type User$receivedInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchInvite
     */
    select?: MatchInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchInvite
     */
    omit?: MatchInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInviteInclude<ExtArgs> | null
    where?: MatchInviteWhereInput
    orderBy?: MatchInviteOrderByWithRelationInput | MatchInviteOrderByWithRelationInput[]
    cursor?: MatchInviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchInviteScalarFieldEnum | MatchInviteScalarFieldEnum[]
  }

  /**
   * User.ExecutionHistory
   */
  export type User$ExecutionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    where?: ExecutionHistoryWhereInput
    orderBy?: ExecutionHistoryOrderByWithRelationInput | ExecutionHistoryOrderByWithRelationInput[]
    cursor?: ExecutionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionHistoryScalarFieldEnum | ExecutionHistoryScalarFieldEnum[]
  }

  /**
   * User.ChatMessage
   */
  export type User$ChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PlayerProfile
   */

  export type AggregatePlayerProfile = {
    _count: PlayerProfileCountAggregateOutputType | null
    _avg: PlayerProfileAvgAggregateOutputType | null
    _sum: PlayerProfileSumAggregateOutputType | null
    _min: PlayerProfileMinAggregateOutputType | null
    _max: PlayerProfileMaxAggregateOutputType | null
  }

  export type PlayerProfileAvgAggregateOutputType = {
    rank: number | null
    rating: number | null
  }

  export type PlayerProfileSumAggregateOutputType = {
    rank: number | null
    rating: number | null
  }

  export type PlayerProfileMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    rank: number | null
    rating: number | null
    region: string | null
    status: $Enums.PlayerStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerProfileMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    rank: number | null
    rating: number | null
    region: string | null
    status: $Enums.PlayerStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerProfileCountAggregateOutputType = {
    id: number
    user_id: number
    rank: number
    rating: number
    region: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlayerProfileAvgAggregateInputType = {
    rank?: true
    rating?: true
  }

  export type PlayerProfileSumAggregateInputType = {
    rank?: true
    rating?: true
  }

  export type PlayerProfileMinAggregateInputType = {
    id?: true
    user_id?: true
    rank?: true
    rating?: true
    region?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerProfileMaxAggregateInputType = {
    id?: true
    user_id?: true
    rank?: true
    rating?: true
    region?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerProfileCountAggregateInputType = {
    id?: true
    user_id?: true
    rank?: true
    rating?: true
    region?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlayerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerProfile to aggregate.
     */
    where?: PlayerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerProfiles to fetch.
     */
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerProfiles
    **/
    _count?: true | PlayerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerProfileMaxAggregateInputType
  }

  export type GetPlayerProfileAggregateType<T extends PlayerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerProfile[P]>
      : GetScalarType<T[P], AggregatePlayerProfile[P]>
  }




  export type PlayerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerProfileWhereInput
    orderBy?: PlayerProfileOrderByWithAggregationInput | PlayerProfileOrderByWithAggregationInput[]
    by: PlayerProfileScalarFieldEnum[] | PlayerProfileScalarFieldEnum
    having?: PlayerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerProfileCountAggregateInputType | true
    _avg?: PlayerProfileAvgAggregateInputType
    _sum?: PlayerProfileSumAggregateInputType
    _min?: PlayerProfileMinAggregateInputType
    _max?: PlayerProfileMaxAggregateInputType
  }

  export type PlayerProfileGroupByOutputType = {
    id: string
    user_id: string
    rank: number
    rating: number
    region: string
    status: $Enums.PlayerStatus
    createdAt: Date
    updatedAt: Date
    _count: PlayerProfileCountAggregateOutputType | null
    _avg: PlayerProfileAvgAggregateOutputType | null
    _sum: PlayerProfileSumAggregateOutputType | null
    _min: PlayerProfileMinAggregateOutputType | null
    _max: PlayerProfileMaxAggregateOutputType | null
  }

  type GetPlayerProfileGroupByPayload<T extends PlayerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerProfileGroupByOutputType[P]>
        }
      >
    >


  export type PlayerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    rank?: boolean
    rating?: boolean
    region?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerProfile"]>

  export type PlayerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    rank?: boolean
    rating?: boolean
    region?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerProfile"]>

  export type PlayerProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    rank?: boolean
    rating?: boolean
    region?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerProfile"]>

  export type PlayerProfileSelectScalar = {
    id?: boolean
    user_id?: boolean
    rank?: boolean
    rating?: boolean
    region?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlayerProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "rank" | "rating" | "region" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["playerProfile"]>
  export type PlayerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlayerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlayerProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlayerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      rank: number
      rating: number
      region: string
      status: $Enums.PlayerStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playerProfile"]>
    composites: {}
  }

  type PlayerProfileGetPayload<S extends boolean | null | undefined | PlayerProfileDefaultArgs> = $Result.GetResult<Prisma.$PlayerProfilePayload, S>

  type PlayerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerProfileCountAggregateInputType | true
    }

  export interface PlayerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerProfile'], meta: { name: 'PlayerProfile' } }
    /**
     * Find zero or one PlayerProfile that matches the filter.
     * @param {PlayerProfileFindUniqueArgs} args - Arguments to find a PlayerProfile
     * @example
     * // Get one PlayerProfile
     * const playerProfile = await prisma.playerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerProfileFindUniqueArgs>(args: SelectSubset<T, PlayerProfileFindUniqueArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerProfileFindUniqueOrThrowArgs} args - Arguments to find a PlayerProfile
     * @example
     * // Get one PlayerProfile
     * const playerProfile = await prisma.playerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileFindFirstArgs} args - Arguments to find a PlayerProfile
     * @example
     * // Get one PlayerProfile
     * const playerProfile = await prisma.playerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerProfileFindFirstArgs>(args?: SelectSubset<T, PlayerProfileFindFirstArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileFindFirstOrThrowArgs} args - Arguments to find a PlayerProfile
     * @example
     * // Get one PlayerProfile
     * const playerProfile = await prisma.playerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerProfiles
     * const playerProfiles = await prisma.playerProfile.findMany()
     * 
     * // Get first 10 PlayerProfiles
     * const playerProfiles = await prisma.playerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerProfileWithIdOnly = await prisma.playerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerProfileFindManyArgs>(args?: SelectSubset<T, PlayerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerProfile.
     * @param {PlayerProfileCreateArgs} args - Arguments to create a PlayerProfile.
     * @example
     * // Create one PlayerProfile
     * const PlayerProfile = await prisma.playerProfile.create({
     *   data: {
     *     // ... data to create a PlayerProfile
     *   }
     * })
     * 
     */
    create<T extends PlayerProfileCreateArgs>(args: SelectSubset<T, PlayerProfileCreateArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerProfiles.
     * @param {PlayerProfileCreateManyArgs} args - Arguments to create many PlayerProfiles.
     * @example
     * // Create many PlayerProfiles
     * const playerProfile = await prisma.playerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerProfileCreateManyArgs>(args?: SelectSubset<T, PlayerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerProfiles and returns the data saved in the database.
     * @param {PlayerProfileCreateManyAndReturnArgs} args - Arguments to create many PlayerProfiles.
     * @example
     * // Create many PlayerProfiles
     * const playerProfile = await prisma.playerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerProfiles and only return the `id`
     * const playerProfileWithIdOnly = await prisma.playerProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerProfile.
     * @param {PlayerProfileDeleteArgs} args - Arguments to delete one PlayerProfile.
     * @example
     * // Delete one PlayerProfile
     * const PlayerProfile = await prisma.playerProfile.delete({
     *   where: {
     *     // ... filter to delete one PlayerProfile
     *   }
     * })
     * 
     */
    delete<T extends PlayerProfileDeleteArgs>(args: SelectSubset<T, PlayerProfileDeleteArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerProfile.
     * @param {PlayerProfileUpdateArgs} args - Arguments to update one PlayerProfile.
     * @example
     * // Update one PlayerProfile
     * const playerProfile = await prisma.playerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerProfileUpdateArgs>(args: SelectSubset<T, PlayerProfileUpdateArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerProfiles.
     * @param {PlayerProfileDeleteManyArgs} args - Arguments to filter PlayerProfiles to delete.
     * @example
     * // Delete a few PlayerProfiles
     * const { count } = await prisma.playerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerProfileDeleteManyArgs>(args?: SelectSubset<T, PlayerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerProfiles
     * const playerProfile = await prisma.playerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerProfileUpdateManyArgs>(args: SelectSubset<T, PlayerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerProfiles and returns the data updated in the database.
     * @param {PlayerProfileUpdateManyAndReturnArgs} args - Arguments to update many PlayerProfiles.
     * @example
     * // Update many PlayerProfiles
     * const playerProfile = await prisma.playerProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerProfiles and only return the `id`
     * const playerProfileWithIdOnly = await prisma.playerProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerProfile.
     * @param {PlayerProfileUpsertArgs} args - Arguments to update or create a PlayerProfile.
     * @example
     * // Update or create a PlayerProfile
     * const playerProfile = await prisma.playerProfile.upsert({
     *   create: {
     *     // ... data to create a PlayerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerProfile we want to update
     *   }
     * })
     */
    upsert<T extends PlayerProfileUpsertArgs>(args: SelectSubset<T, PlayerProfileUpsertArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileCountArgs} args - Arguments to filter PlayerProfiles to count.
     * @example
     * // Count the number of PlayerProfiles
     * const count = await prisma.playerProfile.count({
     *   where: {
     *     // ... the filter for the PlayerProfiles we want to count
     *   }
     * })
    **/
    count<T extends PlayerProfileCountArgs>(
      args?: Subset<T, PlayerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerProfileAggregateArgs>(args: Subset<T, PlayerProfileAggregateArgs>): Prisma.PrismaPromise<GetPlayerProfileAggregateType<T>>

    /**
     * Group by PlayerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileGroupByArgs} args - Group by arguments.
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
      T extends PlayerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerProfileGroupByArgs['orderBy'] }
        : { orderBy?: PlayerProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerProfile model
   */
  readonly fields: PlayerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerProfile model
   */
  interface PlayerProfileFieldRefs {
    readonly id: FieldRef<"PlayerProfile", 'String'>
    readonly user_id: FieldRef<"PlayerProfile", 'String'>
    readonly rank: FieldRef<"PlayerProfile", 'Int'>
    readonly rating: FieldRef<"PlayerProfile", 'Int'>
    readonly region: FieldRef<"PlayerProfile", 'String'>
    readonly status: FieldRef<"PlayerProfile", 'PlayerStatus'>
    readonly createdAt: FieldRef<"PlayerProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"PlayerProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlayerProfile findUnique
   */
  export type PlayerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfile to fetch.
     */
    where: PlayerProfileWhereUniqueInput
  }

  /**
   * PlayerProfile findUniqueOrThrow
   */
  export type PlayerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfile to fetch.
     */
    where: PlayerProfileWhereUniqueInput
  }

  /**
   * PlayerProfile findFirst
   */
  export type PlayerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfile to fetch.
     */
    where?: PlayerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerProfiles to fetch.
     */
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerProfiles.
     */
    cursor?: PlayerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerProfiles.
     */
    distinct?: PlayerProfileScalarFieldEnum | PlayerProfileScalarFieldEnum[]
  }

  /**
   * PlayerProfile findFirstOrThrow
   */
  export type PlayerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfile to fetch.
     */
    where?: PlayerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerProfiles to fetch.
     */
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerProfiles.
     */
    cursor?: PlayerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerProfiles.
     */
    distinct?: PlayerProfileScalarFieldEnum | PlayerProfileScalarFieldEnum[]
  }

  /**
   * PlayerProfile findMany
   */
  export type PlayerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfiles to fetch.
     */
    where?: PlayerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerProfiles to fetch.
     */
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerProfiles.
     */
    cursor?: PlayerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerProfiles.
     */
    skip?: number
    distinct?: PlayerProfileScalarFieldEnum | PlayerProfileScalarFieldEnum[]
  }

  /**
   * PlayerProfile create
   */
  export type PlayerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerProfile.
     */
    data: XOR<PlayerProfileCreateInput, PlayerProfileUncheckedCreateInput>
  }

  /**
   * PlayerProfile createMany
   */
  export type PlayerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerProfiles.
     */
    data: PlayerProfileCreateManyInput | PlayerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerProfile createManyAndReturn
   */
  export type PlayerProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerProfiles.
     */
    data: PlayerProfileCreateManyInput | PlayerProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerProfile update
   */
  export type PlayerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerProfile.
     */
    data: XOR<PlayerProfileUpdateInput, PlayerProfileUncheckedUpdateInput>
    /**
     * Choose, which PlayerProfile to update.
     */
    where: PlayerProfileWhereUniqueInput
  }

  /**
   * PlayerProfile updateMany
   */
  export type PlayerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerProfiles.
     */
    data: XOR<PlayerProfileUpdateManyMutationInput, PlayerProfileUncheckedUpdateManyInput>
    /**
     * Filter which PlayerProfiles to update
     */
    where?: PlayerProfileWhereInput
    /**
     * Limit how many PlayerProfiles to update.
     */
    limit?: number
  }

  /**
   * PlayerProfile updateManyAndReturn
   */
  export type PlayerProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * The data used to update PlayerProfiles.
     */
    data: XOR<PlayerProfileUpdateManyMutationInput, PlayerProfileUncheckedUpdateManyInput>
    /**
     * Filter which PlayerProfiles to update
     */
    where?: PlayerProfileWhereInput
    /**
     * Limit how many PlayerProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerProfile upsert
   */
  export type PlayerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerProfile to update in case it exists.
     */
    where: PlayerProfileWhereUniqueInput
    /**
     * In case the PlayerProfile found by the `where` argument doesn't exist, create a new PlayerProfile with this data.
     */
    create: XOR<PlayerProfileCreateInput, PlayerProfileUncheckedCreateInput>
    /**
     * In case the PlayerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerProfileUpdateInput, PlayerProfileUncheckedUpdateInput>
  }

  /**
   * PlayerProfile delete
   */
  export type PlayerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter which PlayerProfile to delete.
     */
    where: PlayerProfileWhereUniqueInput
  }

  /**
   * PlayerProfile deleteMany
   */
  export type PlayerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerProfiles to delete
     */
    where?: PlayerProfileWhereInput
    /**
     * Limit how many PlayerProfiles to delete.
     */
    limit?: number
  }

  /**
   * PlayerProfile without action
   */
  export type PlayerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
  }


  /**
   * Model RatingHistory
   */

  export type AggregateRatingHistory = {
    _count: RatingHistoryCountAggregateOutputType | null
    _avg: RatingHistoryAvgAggregateOutputType | null
    _sum: RatingHistorySumAggregateOutputType | null
    _min: RatingHistoryMinAggregateOutputType | null
    _max: RatingHistoryMaxAggregateOutputType | null
  }

  export type RatingHistoryAvgAggregateOutputType = {
    old_rating: number | null
    new_rating: number | null
  }

  export type RatingHistorySumAggregateOutputType = {
    old_rating: number | null
    new_rating: number | null
  }

  export type RatingHistoryMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    old_rating: number | null
    new_rating: number | null
    reason: $Enums.RatingReason | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RatingHistoryMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    old_rating: number | null
    new_rating: number | null
    reason: $Enums.RatingReason | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RatingHistoryCountAggregateOutputType = {
    id: number
    user_id: number
    old_rating: number
    new_rating: number
    reason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RatingHistoryAvgAggregateInputType = {
    old_rating?: true
    new_rating?: true
  }

  export type RatingHistorySumAggregateInputType = {
    old_rating?: true
    new_rating?: true
  }

  export type RatingHistoryMinAggregateInputType = {
    id?: true
    user_id?: true
    old_rating?: true
    new_rating?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RatingHistoryMaxAggregateInputType = {
    id?: true
    user_id?: true
    old_rating?: true
    new_rating?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RatingHistoryCountAggregateInputType = {
    id?: true
    user_id?: true
    old_rating?: true
    new_rating?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RatingHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RatingHistory to aggregate.
     */
    where?: RatingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingHistories to fetch.
     */
    orderBy?: RatingHistoryOrderByWithRelationInput | RatingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RatingHistories
    **/
    _count?: true | RatingHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingHistoryMaxAggregateInputType
  }

  export type GetRatingHistoryAggregateType<T extends RatingHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRatingHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRatingHistory[P]>
      : GetScalarType<T[P], AggregateRatingHistory[P]>
  }




  export type RatingHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingHistoryWhereInput
    orderBy?: RatingHistoryOrderByWithAggregationInput | RatingHistoryOrderByWithAggregationInput[]
    by: RatingHistoryScalarFieldEnum[] | RatingHistoryScalarFieldEnum
    having?: RatingHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingHistoryCountAggregateInputType | true
    _avg?: RatingHistoryAvgAggregateInputType
    _sum?: RatingHistorySumAggregateInputType
    _min?: RatingHistoryMinAggregateInputType
    _max?: RatingHistoryMaxAggregateInputType
  }

  export type RatingHistoryGroupByOutputType = {
    id: string
    user_id: string
    old_rating: number
    new_rating: number
    reason: $Enums.RatingReason
    createdAt: Date
    updatedAt: Date
    _count: RatingHistoryCountAggregateOutputType | null
    _avg: RatingHistoryAvgAggregateOutputType | null
    _sum: RatingHistorySumAggregateOutputType | null
    _min: RatingHistoryMinAggregateOutputType | null
    _max: RatingHistoryMaxAggregateOutputType | null
  }

  type GetRatingHistoryGroupByPayload<T extends RatingHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], RatingHistoryGroupByOutputType[P]>
        }
      >
    >


  export type RatingHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    old_rating?: boolean
    new_rating?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratingHistory"]>

  export type RatingHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    old_rating?: boolean
    new_rating?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratingHistory"]>

  export type RatingHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    old_rating?: boolean
    new_rating?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratingHistory"]>

  export type RatingHistorySelectScalar = {
    id?: boolean
    user_id?: boolean
    old_rating?: boolean
    new_rating?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RatingHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "old_rating" | "new_rating" | "reason" | "createdAt" | "updatedAt", ExtArgs["result"]["ratingHistory"]>
  export type RatingHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RatingHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RatingHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RatingHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RatingHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      old_rating: number
      new_rating: number
      reason: $Enums.RatingReason
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ratingHistory"]>
    composites: {}
  }

  type RatingHistoryGetPayload<S extends boolean | null | undefined | RatingHistoryDefaultArgs> = $Result.GetResult<Prisma.$RatingHistoryPayload, S>

  type RatingHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingHistoryCountAggregateInputType | true
    }

  export interface RatingHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RatingHistory'], meta: { name: 'RatingHistory' } }
    /**
     * Find zero or one RatingHistory that matches the filter.
     * @param {RatingHistoryFindUniqueArgs} args - Arguments to find a RatingHistory
     * @example
     * // Get one RatingHistory
     * const ratingHistory = await prisma.ratingHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingHistoryFindUniqueArgs>(args: SelectSubset<T, RatingHistoryFindUniqueArgs<ExtArgs>>): Prisma__RatingHistoryClient<$Result.GetResult<Prisma.$RatingHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RatingHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingHistoryFindUniqueOrThrowArgs} args - Arguments to find a RatingHistory
     * @example
     * // Get one RatingHistory
     * const ratingHistory = await prisma.ratingHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingHistoryClient<$Result.GetResult<Prisma.$RatingHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RatingHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingHistoryFindFirstArgs} args - Arguments to find a RatingHistory
     * @example
     * // Get one RatingHistory
     * const ratingHistory = await prisma.ratingHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingHistoryFindFirstArgs>(args?: SelectSubset<T, RatingHistoryFindFirstArgs<ExtArgs>>): Prisma__RatingHistoryClient<$Result.GetResult<Prisma.$RatingHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RatingHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingHistoryFindFirstOrThrowArgs} args - Arguments to find a RatingHistory
     * @example
     * // Get one RatingHistory
     * const ratingHistory = await prisma.ratingHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingHistoryClient<$Result.GetResult<Prisma.$RatingHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RatingHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RatingHistories
     * const ratingHistories = await prisma.ratingHistory.findMany()
     * 
     * // Get first 10 RatingHistories
     * const ratingHistories = await prisma.ratingHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingHistoryWithIdOnly = await prisma.ratingHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingHistoryFindManyArgs>(args?: SelectSubset<T, RatingHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RatingHistory.
     * @param {RatingHistoryCreateArgs} args - Arguments to create a RatingHistory.
     * @example
     * // Create one RatingHistory
     * const RatingHistory = await prisma.ratingHistory.create({
     *   data: {
     *     // ... data to create a RatingHistory
     *   }
     * })
     * 
     */
    create<T extends RatingHistoryCreateArgs>(args: SelectSubset<T, RatingHistoryCreateArgs<ExtArgs>>): Prisma__RatingHistoryClient<$Result.GetResult<Prisma.$RatingHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RatingHistories.
     * @param {RatingHistoryCreateManyArgs} args - Arguments to create many RatingHistories.
     * @example
     * // Create many RatingHistories
     * const ratingHistory = await prisma.ratingHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingHistoryCreateManyArgs>(args?: SelectSubset<T, RatingHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RatingHistories and returns the data saved in the database.
     * @param {RatingHistoryCreateManyAndReturnArgs} args - Arguments to create many RatingHistories.
     * @example
     * // Create many RatingHistories
     * const ratingHistory = await prisma.ratingHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RatingHistories and only return the `id`
     * const ratingHistoryWithIdOnly = await prisma.ratingHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RatingHistory.
     * @param {RatingHistoryDeleteArgs} args - Arguments to delete one RatingHistory.
     * @example
     * // Delete one RatingHistory
     * const RatingHistory = await prisma.ratingHistory.delete({
     *   where: {
     *     // ... filter to delete one RatingHistory
     *   }
     * })
     * 
     */
    delete<T extends RatingHistoryDeleteArgs>(args: SelectSubset<T, RatingHistoryDeleteArgs<ExtArgs>>): Prisma__RatingHistoryClient<$Result.GetResult<Prisma.$RatingHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RatingHistory.
     * @param {RatingHistoryUpdateArgs} args - Arguments to update one RatingHistory.
     * @example
     * // Update one RatingHistory
     * const ratingHistory = await prisma.ratingHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingHistoryUpdateArgs>(args: SelectSubset<T, RatingHistoryUpdateArgs<ExtArgs>>): Prisma__RatingHistoryClient<$Result.GetResult<Prisma.$RatingHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RatingHistories.
     * @param {RatingHistoryDeleteManyArgs} args - Arguments to filter RatingHistories to delete.
     * @example
     * // Delete a few RatingHistories
     * const { count } = await prisma.ratingHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingHistoryDeleteManyArgs>(args?: SelectSubset<T, RatingHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RatingHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RatingHistories
     * const ratingHistory = await prisma.ratingHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingHistoryUpdateManyArgs>(args: SelectSubset<T, RatingHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RatingHistories and returns the data updated in the database.
     * @param {RatingHistoryUpdateManyAndReturnArgs} args - Arguments to update many RatingHistories.
     * @example
     * // Update many RatingHistories
     * const ratingHistory = await prisma.ratingHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RatingHistories and only return the `id`
     * const ratingHistoryWithIdOnly = await prisma.ratingHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RatingHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RatingHistory.
     * @param {RatingHistoryUpsertArgs} args - Arguments to update or create a RatingHistory.
     * @example
     * // Update or create a RatingHistory
     * const ratingHistory = await prisma.ratingHistory.upsert({
     *   create: {
     *     // ... data to create a RatingHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RatingHistory we want to update
     *   }
     * })
     */
    upsert<T extends RatingHistoryUpsertArgs>(args: SelectSubset<T, RatingHistoryUpsertArgs<ExtArgs>>): Prisma__RatingHistoryClient<$Result.GetResult<Prisma.$RatingHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RatingHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingHistoryCountArgs} args - Arguments to filter RatingHistories to count.
     * @example
     * // Count the number of RatingHistories
     * const count = await prisma.ratingHistory.count({
     *   where: {
     *     // ... the filter for the RatingHistories we want to count
     *   }
     * })
    **/
    count<T extends RatingHistoryCountArgs>(
      args?: Subset<T, RatingHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RatingHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingHistoryAggregateArgs>(args: Subset<T, RatingHistoryAggregateArgs>): Prisma.PrismaPromise<GetRatingHistoryAggregateType<T>>

    /**
     * Group by RatingHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingHistoryGroupByArgs} args - Group by arguments.
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
      T extends RatingHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingHistoryGroupByArgs['orderBy'] }
        : { orderBy?: RatingHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RatingHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RatingHistory model
   */
  readonly fields: RatingHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RatingHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RatingHistory model
   */
  interface RatingHistoryFieldRefs {
    readonly id: FieldRef<"RatingHistory", 'String'>
    readonly user_id: FieldRef<"RatingHistory", 'String'>
    readonly old_rating: FieldRef<"RatingHistory", 'Int'>
    readonly new_rating: FieldRef<"RatingHistory", 'Int'>
    readonly reason: FieldRef<"RatingHistory", 'RatingReason'>
    readonly createdAt: FieldRef<"RatingHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"RatingHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RatingHistory findUnique
   */
  export type RatingHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingHistory
     */
    select?: RatingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingHistory
     */
    omit?: RatingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RatingHistory to fetch.
     */
    where: RatingHistoryWhereUniqueInput
  }

  /**
   * RatingHistory findUniqueOrThrow
   */
  export type RatingHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingHistory
     */
    select?: RatingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingHistory
     */
    omit?: RatingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RatingHistory to fetch.
     */
    where: RatingHistoryWhereUniqueInput
  }

  /**
   * RatingHistory findFirst
   */
  export type RatingHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingHistory
     */
    select?: RatingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingHistory
     */
    omit?: RatingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RatingHistory to fetch.
     */
    where?: RatingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingHistories to fetch.
     */
    orderBy?: RatingHistoryOrderByWithRelationInput | RatingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RatingHistories.
     */
    cursor?: RatingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RatingHistories.
     */
    distinct?: RatingHistoryScalarFieldEnum | RatingHistoryScalarFieldEnum[]
  }

  /**
   * RatingHistory findFirstOrThrow
   */
  export type RatingHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingHistory
     */
    select?: RatingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingHistory
     */
    omit?: RatingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RatingHistory to fetch.
     */
    where?: RatingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingHistories to fetch.
     */
    orderBy?: RatingHistoryOrderByWithRelationInput | RatingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RatingHistories.
     */
    cursor?: RatingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RatingHistories.
     */
    distinct?: RatingHistoryScalarFieldEnum | RatingHistoryScalarFieldEnum[]
  }

  /**
   * RatingHistory findMany
   */
  export type RatingHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingHistory
     */
    select?: RatingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingHistory
     */
    omit?: RatingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RatingHistories to fetch.
     */
    where?: RatingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingHistories to fetch.
     */
    orderBy?: RatingHistoryOrderByWithRelationInput | RatingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RatingHistories.
     */
    cursor?: RatingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingHistories.
     */
    skip?: number
    distinct?: RatingHistoryScalarFieldEnum | RatingHistoryScalarFieldEnum[]
  }

  /**
   * RatingHistory create
   */
  export type RatingHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingHistory
     */
    select?: RatingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingHistory
     */
    omit?: RatingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a RatingHistory.
     */
    data: XOR<RatingHistoryCreateInput, RatingHistoryUncheckedCreateInput>
  }

  /**
   * RatingHistory createMany
   */
  export type RatingHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RatingHistories.
     */
    data: RatingHistoryCreateManyInput | RatingHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RatingHistory createManyAndReturn
   */
  export type RatingHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingHistory
     */
    select?: RatingHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RatingHistory
     */
    omit?: RatingHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many RatingHistories.
     */
    data: RatingHistoryCreateManyInput | RatingHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RatingHistory update
   */
  export type RatingHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingHistory
     */
    select?: RatingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingHistory
     */
    omit?: RatingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a RatingHistory.
     */
    data: XOR<RatingHistoryUpdateInput, RatingHistoryUncheckedUpdateInput>
    /**
     * Choose, which RatingHistory to update.
     */
    where: RatingHistoryWhereUniqueInput
  }

  /**
   * RatingHistory updateMany
   */
  export type RatingHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RatingHistories.
     */
    data: XOR<RatingHistoryUpdateManyMutationInput, RatingHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RatingHistories to update
     */
    where?: RatingHistoryWhereInput
    /**
     * Limit how many RatingHistories to update.
     */
    limit?: number
  }

  /**
   * RatingHistory updateManyAndReturn
   */
  export type RatingHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingHistory
     */
    select?: RatingHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RatingHistory
     */
    omit?: RatingHistoryOmit<ExtArgs> | null
    /**
     * The data used to update RatingHistories.
     */
    data: XOR<RatingHistoryUpdateManyMutationInput, RatingHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RatingHistories to update
     */
    where?: RatingHistoryWhereInput
    /**
     * Limit how many RatingHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RatingHistory upsert
   */
  export type RatingHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingHistory
     */
    select?: RatingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingHistory
     */
    omit?: RatingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the RatingHistory to update in case it exists.
     */
    where: RatingHistoryWhereUniqueInput
    /**
     * In case the RatingHistory found by the `where` argument doesn't exist, create a new RatingHistory with this data.
     */
    create: XOR<RatingHistoryCreateInput, RatingHistoryUncheckedCreateInput>
    /**
     * In case the RatingHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingHistoryUpdateInput, RatingHistoryUncheckedUpdateInput>
  }

  /**
   * RatingHistory delete
   */
  export type RatingHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingHistory
     */
    select?: RatingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingHistory
     */
    omit?: RatingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingHistoryInclude<ExtArgs> | null
    /**
     * Filter which RatingHistory to delete.
     */
    where: RatingHistoryWhereUniqueInput
  }

  /**
   * RatingHistory deleteMany
   */
  export type RatingHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RatingHistories to delete
     */
    where?: RatingHistoryWhereInput
    /**
     * Limit how many RatingHistories to delete.
     */
    limit?: number
  }

  /**
   * RatingHistory without action
   */
  export type RatingHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingHistory
     */
    select?: RatingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingHistory
     */
    omit?: RatingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    player1_id: string | null
    player2_id: string | null
    winner_id: string | null
    status: $Enums.MatchStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    player1_id: string | null
    player2_id: string | null
    winner_id: string | null
    status: $Enums.MatchStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    player1_id: number
    player2_id: number
    winner_id: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchMinAggregateInputType = {
    id?: true
    player1_id?: true
    player2_id?: true
    winner_id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    player1_id?: true
    player2_id?: true
    winner_id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    player1_id?: true
    player2_id?: true
    winner_id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    player1_id: string
    player2_id: string
    winner_id: string
    status: $Enums.MatchStatus
    createdAt: Date
    updatedAt: Date
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1_id?: boolean
    player2_id?: boolean
    winner_id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | UserDefaultArgs<ExtArgs>
    MatchInvite?: boolean | Match$MatchInviteArgs<ExtArgs>
    ExecutionHistory?: boolean | Match$ExecutionHistoryArgs<ExtArgs>
    ChatMessage?: boolean | Match$ChatMessageArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1_id?: boolean
    player2_id?: boolean
    winner_id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1_id?: boolean
    player2_id?: boolean
    winner_id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    player1_id?: boolean
    player2_id?: boolean
    winner_id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "player1_id" | "player2_id" | "winner_id" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | UserDefaultArgs<ExtArgs>
    MatchInvite?: boolean | Match$MatchInviteArgs<ExtArgs>
    ExecutionHistory?: boolean | Match$ExecutionHistoryArgs<ExtArgs>
    ChatMessage?: boolean | Match$ChatMessageArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      player1: Prisma.$UserPayload<ExtArgs>
      player2: Prisma.$UserPayload<ExtArgs>
      winner: Prisma.$UserPayload<ExtArgs>
      MatchInvite: Prisma.$MatchInvitePayload<ExtArgs>[]
      ExecutionHistory: Prisma.$ExecutionHistoryPayload<ExtArgs>[]
      ChatMessage: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      player1_id: string
      player2_id: string
      winner_id: string
      status: $Enums.MatchStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
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
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    winner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    MatchInvite<T extends Match$MatchInviteArgs<ExtArgs> = {}>(args?: Subset<T, Match$MatchInviteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ExecutionHistory<T extends Match$ExecutionHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Match$ExecutionHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ChatMessage<T extends Match$ChatMessageArgs<ExtArgs> = {}>(args?: Subset<T, Match$ChatMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly player1_id: FieldRef<"Match", 'String'>
    readonly player2_id: FieldRef<"Match", 'String'>
    readonly winner_id: FieldRef<"Match", 'String'>
    readonly status: FieldRef<"Match", 'MatchStatus'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
    readonly updatedAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match.MatchInvite
   */
  export type Match$MatchInviteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchInvite
     */
    select?: MatchInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchInvite
     */
    omit?: MatchInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInviteInclude<ExtArgs> | null
    where?: MatchInviteWhereInput
    orderBy?: MatchInviteOrderByWithRelationInput | MatchInviteOrderByWithRelationInput[]
    cursor?: MatchInviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchInviteScalarFieldEnum | MatchInviteScalarFieldEnum[]
  }

  /**
   * Match.ExecutionHistory
   */
  export type Match$ExecutionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    where?: ExecutionHistoryWhereInput
    orderBy?: ExecutionHistoryOrderByWithRelationInput | ExecutionHistoryOrderByWithRelationInput[]
    cursor?: ExecutionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionHistoryScalarFieldEnum | ExecutionHistoryScalarFieldEnum[]
  }

  /**
   * Match.ChatMessage
   */
  export type Match$ChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    receiver_id: string | null
    type: $Enums.NotificationType | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    receiver_id: string | null
    type: $Enums.NotificationType | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    receiver_id: number
    type: number
    message: number
    read: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    receiver_id?: true
    type?: true
    message?: true
    read?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    receiver_id?: true
    type?: true
    message?: true
    read?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    receiver_id?: true
    type?: true
    message?: true
    read?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    receiver_id: string
    type: $Enums.NotificationType
    message: string
    read: boolean
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiver_id?: boolean
    type?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiver_id?: boolean
    type?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiver_id?: boolean
    type?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    receiver_id?: boolean
    type?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "receiver_id" | "type" | "message" | "read" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      receiver_id: string
      type: $Enums.NotificationType
      message: string
      read: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly receiver_id: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model MatchInvite
   */

  export type AggregateMatchInvite = {
    _count: MatchInviteCountAggregateOutputType | null
    _min: MatchInviteMinAggregateOutputType | null
    _max: MatchInviteMaxAggregateOutputType | null
  }

  export type MatchInviteMinAggregateOutputType = {
    id: string | null
    match_id: string | null
    sender_id: string | null
    receiver_id: string | null
    status: $Enums.MatchInviteStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchInviteMaxAggregateOutputType = {
    id: string | null
    match_id: string | null
    sender_id: string | null
    receiver_id: string | null
    status: $Enums.MatchInviteStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchInviteCountAggregateOutputType = {
    id: number
    match_id: number
    sender_id: number
    receiver_id: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchInviteMinAggregateInputType = {
    id?: true
    match_id?: true
    sender_id?: true
    receiver_id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchInviteMaxAggregateInputType = {
    id?: true
    match_id?: true
    sender_id?: true
    receiver_id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchInviteCountAggregateInputType = {
    id?: true
    match_id?: true
    sender_id?: true
    receiver_id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchInviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchInvite to aggregate.
     */
    where?: MatchInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchInvites to fetch.
     */
    orderBy?: MatchInviteOrderByWithRelationInput | MatchInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchInvites
    **/
    _count?: true | MatchInviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchInviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchInviteMaxAggregateInputType
  }

  export type GetMatchInviteAggregateType<T extends MatchInviteAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchInvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchInvite[P]>
      : GetScalarType<T[P], AggregateMatchInvite[P]>
  }




  export type MatchInviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchInviteWhereInput
    orderBy?: MatchInviteOrderByWithAggregationInput | MatchInviteOrderByWithAggregationInput[]
    by: MatchInviteScalarFieldEnum[] | MatchInviteScalarFieldEnum
    having?: MatchInviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchInviteCountAggregateInputType | true
    _min?: MatchInviteMinAggregateInputType
    _max?: MatchInviteMaxAggregateInputType
  }

  export type MatchInviteGroupByOutputType = {
    id: string
    match_id: string
    sender_id: string
    receiver_id: string
    status: $Enums.MatchInviteStatus
    createdAt: Date
    updatedAt: Date
    _count: MatchInviteCountAggregateOutputType | null
    _min: MatchInviteMinAggregateOutputType | null
    _max: MatchInviteMaxAggregateOutputType | null
  }

  type GetMatchInviteGroupByPayload<T extends MatchInviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchInviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchInviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchInviteGroupByOutputType[P]>
            : GetScalarType<T[P], MatchInviteGroupByOutputType[P]>
        }
      >
    >


  export type MatchInviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    match_id?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchInvite"]>

  export type MatchInviteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    match_id?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchInvite"]>

  export type MatchInviteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    match_id?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchInvite"]>

  export type MatchInviteSelectScalar = {
    id?: boolean
    match_id?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchInviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "match_id" | "sender_id" | "receiver_id" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["matchInvite"]>
  export type MatchInviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchInviteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchInviteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatchInvitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchInvite"
    objects: {
      match: Prisma.$MatchPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      match_id: string
      sender_id: string
      receiver_id: string
      status: $Enums.MatchInviteStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["matchInvite"]>
    composites: {}
  }

  type MatchInviteGetPayload<S extends boolean | null | undefined | MatchInviteDefaultArgs> = $Result.GetResult<Prisma.$MatchInvitePayload, S>

  type MatchInviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchInviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchInviteCountAggregateInputType | true
    }

  export interface MatchInviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchInvite'], meta: { name: 'MatchInvite' } }
    /**
     * Find zero or one MatchInvite that matches the filter.
     * @param {MatchInviteFindUniqueArgs} args - Arguments to find a MatchInvite
     * @example
     * // Get one MatchInvite
     * const matchInvite = await prisma.matchInvite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchInviteFindUniqueArgs>(args: SelectSubset<T, MatchInviteFindUniqueArgs<ExtArgs>>): Prisma__MatchInviteClient<$Result.GetResult<Prisma.$MatchInvitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchInvite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchInviteFindUniqueOrThrowArgs} args - Arguments to find a MatchInvite
     * @example
     * // Get one MatchInvite
     * const matchInvite = await prisma.matchInvite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchInviteFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchInviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchInviteClient<$Result.GetResult<Prisma.$MatchInvitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchInvite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchInviteFindFirstArgs} args - Arguments to find a MatchInvite
     * @example
     * // Get one MatchInvite
     * const matchInvite = await prisma.matchInvite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchInviteFindFirstArgs>(args?: SelectSubset<T, MatchInviteFindFirstArgs<ExtArgs>>): Prisma__MatchInviteClient<$Result.GetResult<Prisma.$MatchInvitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchInvite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchInviteFindFirstOrThrowArgs} args - Arguments to find a MatchInvite
     * @example
     * // Get one MatchInvite
     * const matchInvite = await prisma.matchInvite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchInviteFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchInviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchInviteClient<$Result.GetResult<Prisma.$MatchInvitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchInvites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchInviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchInvites
     * const matchInvites = await prisma.matchInvite.findMany()
     * 
     * // Get first 10 MatchInvites
     * const matchInvites = await prisma.matchInvite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchInviteWithIdOnly = await prisma.matchInvite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchInviteFindManyArgs>(args?: SelectSubset<T, MatchInviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchInvite.
     * @param {MatchInviteCreateArgs} args - Arguments to create a MatchInvite.
     * @example
     * // Create one MatchInvite
     * const MatchInvite = await prisma.matchInvite.create({
     *   data: {
     *     // ... data to create a MatchInvite
     *   }
     * })
     * 
     */
    create<T extends MatchInviteCreateArgs>(args: SelectSubset<T, MatchInviteCreateArgs<ExtArgs>>): Prisma__MatchInviteClient<$Result.GetResult<Prisma.$MatchInvitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchInvites.
     * @param {MatchInviteCreateManyArgs} args - Arguments to create many MatchInvites.
     * @example
     * // Create many MatchInvites
     * const matchInvite = await prisma.matchInvite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchInviteCreateManyArgs>(args?: SelectSubset<T, MatchInviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchInvites and returns the data saved in the database.
     * @param {MatchInviteCreateManyAndReturnArgs} args - Arguments to create many MatchInvites.
     * @example
     * // Create many MatchInvites
     * const matchInvite = await prisma.matchInvite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchInvites and only return the `id`
     * const matchInviteWithIdOnly = await prisma.matchInvite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchInviteCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchInviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchInvitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchInvite.
     * @param {MatchInviteDeleteArgs} args - Arguments to delete one MatchInvite.
     * @example
     * // Delete one MatchInvite
     * const MatchInvite = await prisma.matchInvite.delete({
     *   where: {
     *     // ... filter to delete one MatchInvite
     *   }
     * })
     * 
     */
    delete<T extends MatchInviteDeleteArgs>(args: SelectSubset<T, MatchInviteDeleteArgs<ExtArgs>>): Prisma__MatchInviteClient<$Result.GetResult<Prisma.$MatchInvitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchInvite.
     * @param {MatchInviteUpdateArgs} args - Arguments to update one MatchInvite.
     * @example
     * // Update one MatchInvite
     * const matchInvite = await prisma.matchInvite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchInviteUpdateArgs>(args: SelectSubset<T, MatchInviteUpdateArgs<ExtArgs>>): Prisma__MatchInviteClient<$Result.GetResult<Prisma.$MatchInvitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchInvites.
     * @param {MatchInviteDeleteManyArgs} args - Arguments to filter MatchInvites to delete.
     * @example
     * // Delete a few MatchInvites
     * const { count } = await prisma.matchInvite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchInviteDeleteManyArgs>(args?: SelectSubset<T, MatchInviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchInvites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchInviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchInvites
     * const matchInvite = await prisma.matchInvite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchInviteUpdateManyArgs>(args: SelectSubset<T, MatchInviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchInvites and returns the data updated in the database.
     * @param {MatchInviteUpdateManyAndReturnArgs} args - Arguments to update many MatchInvites.
     * @example
     * // Update many MatchInvites
     * const matchInvite = await prisma.matchInvite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchInvites and only return the `id`
     * const matchInviteWithIdOnly = await prisma.matchInvite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchInviteUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchInviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchInvitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchInvite.
     * @param {MatchInviteUpsertArgs} args - Arguments to update or create a MatchInvite.
     * @example
     * // Update or create a MatchInvite
     * const matchInvite = await prisma.matchInvite.upsert({
     *   create: {
     *     // ... data to create a MatchInvite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchInvite we want to update
     *   }
     * })
     */
    upsert<T extends MatchInviteUpsertArgs>(args: SelectSubset<T, MatchInviteUpsertArgs<ExtArgs>>): Prisma__MatchInviteClient<$Result.GetResult<Prisma.$MatchInvitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchInvites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchInviteCountArgs} args - Arguments to filter MatchInvites to count.
     * @example
     * // Count the number of MatchInvites
     * const count = await prisma.matchInvite.count({
     *   where: {
     *     // ... the filter for the MatchInvites we want to count
     *   }
     * })
    **/
    count<T extends MatchInviteCountArgs>(
      args?: Subset<T, MatchInviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchInviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchInvite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchInviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchInviteAggregateArgs>(args: Subset<T, MatchInviteAggregateArgs>): Prisma.PrismaPromise<GetMatchInviteAggregateType<T>>

    /**
     * Group by MatchInvite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchInviteGroupByArgs} args - Group by arguments.
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
      T extends MatchInviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchInviteGroupByArgs['orderBy'] }
        : { orderBy?: MatchInviteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchInviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchInviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchInvite model
   */
  readonly fields: MatchInviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchInvite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchInviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatchInvite model
   */
  interface MatchInviteFieldRefs {
    readonly id: FieldRef<"MatchInvite", 'String'>
    readonly match_id: FieldRef<"MatchInvite", 'String'>
    readonly sender_id: FieldRef<"MatchInvite", 'String'>
    readonly receiver_id: FieldRef<"MatchInvite", 'String'>
    readonly status: FieldRef<"MatchInvite", 'MatchInviteStatus'>
    readonly createdAt: FieldRef<"MatchInvite", 'DateTime'>
    readonly updatedAt: FieldRef<"MatchInvite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchInvite findUnique
   */
  export type MatchInviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchInvite
     */
    select?: MatchInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchInvite
     */
    omit?: MatchInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInviteInclude<ExtArgs> | null
    /**
     * Filter, which MatchInvite to fetch.
     */
    where: MatchInviteWhereUniqueInput
  }

  /**
   * MatchInvite findUniqueOrThrow
   */
  export type MatchInviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchInvite
     */
    select?: MatchInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchInvite
     */
    omit?: MatchInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInviteInclude<ExtArgs> | null
    /**
     * Filter, which MatchInvite to fetch.
     */
    where: MatchInviteWhereUniqueInput
  }

  /**
   * MatchInvite findFirst
   */
  export type MatchInviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchInvite
     */
    select?: MatchInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchInvite
     */
    omit?: MatchInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInviteInclude<ExtArgs> | null
    /**
     * Filter, which MatchInvite to fetch.
     */
    where?: MatchInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchInvites to fetch.
     */
    orderBy?: MatchInviteOrderByWithRelationInput | MatchInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchInvites.
     */
    cursor?: MatchInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchInvites.
     */
    distinct?: MatchInviteScalarFieldEnum | MatchInviteScalarFieldEnum[]
  }

  /**
   * MatchInvite findFirstOrThrow
   */
  export type MatchInviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchInvite
     */
    select?: MatchInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchInvite
     */
    omit?: MatchInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInviteInclude<ExtArgs> | null
    /**
     * Filter, which MatchInvite to fetch.
     */
    where?: MatchInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchInvites to fetch.
     */
    orderBy?: MatchInviteOrderByWithRelationInput | MatchInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchInvites.
     */
    cursor?: MatchInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchInvites.
     */
    distinct?: MatchInviteScalarFieldEnum | MatchInviteScalarFieldEnum[]
  }

  /**
   * MatchInvite findMany
   */
  export type MatchInviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchInvite
     */
    select?: MatchInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchInvite
     */
    omit?: MatchInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInviteInclude<ExtArgs> | null
    /**
     * Filter, which MatchInvites to fetch.
     */
    where?: MatchInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchInvites to fetch.
     */
    orderBy?: MatchInviteOrderByWithRelationInput | MatchInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchInvites.
     */
    cursor?: MatchInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchInvites.
     */
    skip?: number
    distinct?: MatchInviteScalarFieldEnum | MatchInviteScalarFieldEnum[]
  }

  /**
   * MatchInvite create
   */
  export type MatchInviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchInvite
     */
    select?: MatchInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchInvite
     */
    omit?: MatchInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInviteInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchInvite.
     */
    data: XOR<MatchInviteCreateInput, MatchInviteUncheckedCreateInput>
  }

  /**
   * MatchInvite createMany
   */
  export type MatchInviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchInvites.
     */
    data: MatchInviteCreateManyInput | MatchInviteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatchInvite createManyAndReturn
   */
  export type MatchInviteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchInvite
     */
    select?: MatchInviteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchInvite
     */
    omit?: MatchInviteOmit<ExtArgs> | null
    /**
     * The data used to create many MatchInvites.
     */
    data: MatchInviteCreateManyInput | MatchInviteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInviteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchInvite update
   */
  export type MatchInviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchInvite
     */
    select?: MatchInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchInvite
     */
    omit?: MatchInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInviteInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchInvite.
     */
    data: XOR<MatchInviteUpdateInput, MatchInviteUncheckedUpdateInput>
    /**
     * Choose, which MatchInvite to update.
     */
    where: MatchInviteWhereUniqueInput
  }

  /**
   * MatchInvite updateMany
   */
  export type MatchInviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchInvites.
     */
    data: XOR<MatchInviteUpdateManyMutationInput, MatchInviteUncheckedUpdateManyInput>
    /**
     * Filter which MatchInvites to update
     */
    where?: MatchInviteWhereInput
    /**
     * Limit how many MatchInvites to update.
     */
    limit?: number
  }

  /**
   * MatchInvite updateManyAndReturn
   */
  export type MatchInviteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchInvite
     */
    select?: MatchInviteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchInvite
     */
    omit?: MatchInviteOmit<ExtArgs> | null
    /**
     * The data used to update MatchInvites.
     */
    data: XOR<MatchInviteUpdateManyMutationInput, MatchInviteUncheckedUpdateManyInput>
    /**
     * Filter which MatchInvites to update
     */
    where?: MatchInviteWhereInput
    /**
     * Limit how many MatchInvites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInviteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchInvite upsert
   */
  export type MatchInviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchInvite
     */
    select?: MatchInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchInvite
     */
    omit?: MatchInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInviteInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchInvite to update in case it exists.
     */
    where: MatchInviteWhereUniqueInput
    /**
     * In case the MatchInvite found by the `where` argument doesn't exist, create a new MatchInvite with this data.
     */
    create: XOR<MatchInviteCreateInput, MatchInviteUncheckedCreateInput>
    /**
     * In case the MatchInvite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchInviteUpdateInput, MatchInviteUncheckedUpdateInput>
  }

  /**
   * MatchInvite delete
   */
  export type MatchInviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchInvite
     */
    select?: MatchInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchInvite
     */
    omit?: MatchInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInviteInclude<ExtArgs> | null
    /**
     * Filter which MatchInvite to delete.
     */
    where: MatchInviteWhereUniqueInput
  }

  /**
   * MatchInvite deleteMany
   */
  export type MatchInviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchInvites to delete
     */
    where?: MatchInviteWhereInput
    /**
     * Limit how many MatchInvites to delete.
     */
    limit?: number
  }

  /**
   * MatchInvite without action
   */
  export type MatchInviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchInvite
     */
    select?: MatchInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchInvite
     */
    omit?: MatchInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInviteInclude<ExtArgs> | null
  }


  /**
   * Model ExecutionHistory
   */

  export type AggregateExecutionHistory = {
    _count: ExecutionHistoryCountAggregateOutputType | null
    _min: ExecutionHistoryMinAggregateOutputType | null
    _max: ExecutionHistoryMaxAggregateOutputType | null
  }

  export type ExecutionHistoryMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    match_id: string | null
    code: string | null
    output: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExecutionHistoryMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    match_id: string | null
    code: string | null
    output: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExecutionHistoryCountAggregateOutputType = {
    id: number
    user_id: number
    match_id: number
    code: number
    output: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExecutionHistoryMinAggregateInputType = {
    id?: true
    user_id?: true
    match_id?: true
    code?: true
    output?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExecutionHistoryMaxAggregateInputType = {
    id?: true
    user_id?: true
    match_id?: true
    code?: true
    output?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExecutionHistoryCountAggregateInputType = {
    id?: true
    user_id?: true
    match_id?: true
    code?: true
    output?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExecutionHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionHistory to aggregate.
     */
    where?: ExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionHistories to fetch.
     */
    orderBy?: ExecutionHistoryOrderByWithRelationInput | ExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExecutionHistories
    **/
    _count?: true | ExecutionHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutionHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutionHistoryMaxAggregateInputType
  }

  export type GetExecutionHistoryAggregateType<T extends ExecutionHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateExecutionHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecutionHistory[P]>
      : GetScalarType<T[P], AggregateExecutionHistory[P]>
  }




  export type ExecutionHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionHistoryWhereInput
    orderBy?: ExecutionHistoryOrderByWithAggregationInput | ExecutionHistoryOrderByWithAggregationInput[]
    by: ExecutionHistoryScalarFieldEnum[] | ExecutionHistoryScalarFieldEnum
    having?: ExecutionHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutionHistoryCountAggregateInputType | true
    _min?: ExecutionHistoryMinAggregateInputType
    _max?: ExecutionHistoryMaxAggregateInputType
  }

  export type ExecutionHistoryGroupByOutputType = {
    id: string
    user_id: string
    match_id: string
    code: string
    output: string
    createdAt: Date
    updatedAt: Date
    _count: ExecutionHistoryCountAggregateOutputType | null
    _min: ExecutionHistoryMinAggregateOutputType | null
    _max: ExecutionHistoryMaxAggregateOutputType | null
  }

  type GetExecutionHistoryGroupByPayload<T extends ExecutionHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutionHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutionHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutionHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutionHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ExecutionHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    match_id?: boolean
    code?: boolean
    output?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionHistory"]>

  export type ExecutionHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    match_id?: boolean
    code?: boolean
    output?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionHistory"]>

  export type ExecutionHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    match_id?: boolean
    code?: boolean
    output?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionHistory"]>

  export type ExecutionHistorySelectScalar = {
    id?: boolean
    user_id?: boolean
    match_id?: boolean
    code?: boolean
    output?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExecutionHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "match_id" | "code" | "output" | "createdAt" | "updatedAt", ExtArgs["result"]["executionHistory"]>
  export type ExecutionHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }
  export type ExecutionHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }
  export type ExecutionHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }

  export type $ExecutionHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExecutionHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      match: Prisma.$MatchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      match_id: string
      code: string
      output: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["executionHistory"]>
    composites: {}
  }

  type ExecutionHistoryGetPayload<S extends boolean | null | undefined | ExecutionHistoryDefaultArgs> = $Result.GetResult<Prisma.$ExecutionHistoryPayload, S>

  type ExecutionHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExecutionHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExecutionHistoryCountAggregateInputType | true
    }

  export interface ExecutionHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExecutionHistory'], meta: { name: 'ExecutionHistory' } }
    /**
     * Find zero or one ExecutionHistory that matches the filter.
     * @param {ExecutionHistoryFindUniqueArgs} args - Arguments to find a ExecutionHistory
     * @example
     * // Get one ExecutionHistory
     * const executionHistory = await prisma.executionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutionHistoryFindUniqueArgs>(args: SelectSubset<T, ExecutionHistoryFindUniqueArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExecutionHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExecutionHistoryFindUniqueOrThrowArgs} args - Arguments to find a ExecutionHistory
     * @example
     * // Get one ExecutionHistory
     * const executionHistory = await prisma.executionHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutionHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutionHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryFindFirstArgs} args - Arguments to find a ExecutionHistory
     * @example
     * // Get one ExecutionHistory
     * const executionHistory = await prisma.executionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutionHistoryFindFirstArgs>(args?: SelectSubset<T, ExecutionHistoryFindFirstArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryFindFirstOrThrowArgs} args - Arguments to find a ExecutionHistory
     * @example
     * // Get one ExecutionHistory
     * const executionHistory = await prisma.executionHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutionHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutionHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExecutionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExecutionHistories
     * const executionHistories = await prisma.executionHistory.findMany()
     * 
     * // Get first 10 ExecutionHistories
     * const executionHistories = await prisma.executionHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executionHistoryWithIdOnly = await prisma.executionHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutionHistoryFindManyArgs>(args?: SelectSubset<T, ExecutionHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExecutionHistory.
     * @param {ExecutionHistoryCreateArgs} args - Arguments to create a ExecutionHistory.
     * @example
     * // Create one ExecutionHistory
     * const ExecutionHistory = await prisma.executionHistory.create({
     *   data: {
     *     // ... data to create a ExecutionHistory
     *   }
     * })
     * 
     */
    create<T extends ExecutionHistoryCreateArgs>(args: SelectSubset<T, ExecutionHistoryCreateArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExecutionHistories.
     * @param {ExecutionHistoryCreateManyArgs} args - Arguments to create many ExecutionHistories.
     * @example
     * // Create many ExecutionHistories
     * const executionHistory = await prisma.executionHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutionHistoryCreateManyArgs>(args?: SelectSubset<T, ExecutionHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExecutionHistories and returns the data saved in the database.
     * @param {ExecutionHistoryCreateManyAndReturnArgs} args - Arguments to create many ExecutionHistories.
     * @example
     * // Create many ExecutionHistories
     * const executionHistory = await prisma.executionHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExecutionHistories and only return the `id`
     * const executionHistoryWithIdOnly = await prisma.executionHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExecutionHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ExecutionHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExecutionHistory.
     * @param {ExecutionHistoryDeleteArgs} args - Arguments to delete one ExecutionHistory.
     * @example
     * // Delete one ExecutionHistory
     * const ExecutionHistory = await prisma.executionHistory.delete({
     *   where: {
     *     // ... filter to delete one ExecutionHistory
     *   }
     * })
     * 
     */
    delete<T extends ExecutionHistoryDeleteArgs>(args: SelectSubset<T, ExecutionHistoryDeleteArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExecutionHistory.
     * @param {ExecutionHistoryUpdateArgs} args - Arguments to update one ExecutionHistory.
     * @example
     * // Update one ExecutionHistory
     * const executionHistory = await prisma.executionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutionHistoryUpdateArgs>(args: SelectSubset<T, ExecutionHistoryUpdateArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExecutionHistories.
     * @param {ExecutionHistoryDeleteManyArgs} args - Arguments to filter ExecutionHistories to delete.
     * @example
     * // Delete a few ExecutionHistories
     * const { count } = await prisma.executionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutionHistoryDeleteManyArgs>(args?: SelectSubset<T, ExecutionHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExecutionHistories
     * const executionHistory = await prisma.executionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutionHistoryUpdateManyArgs>(args: SelectSubset<T, ExecutionHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionHistories and returns the data updated in the database.
     * @param {ExecutionHistoryUpdateManyAndReturnArgs} args - Arguments to update many ExecutionHistories.
     * @example
     * // Update many ExecutionHistories
     * const executionHistory = await prisma.executionHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExecutionHistories and only return the `id`
     * const executionHistoryWithIdOnly = await prisma.executionHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExecutionHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ExecutionHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExecutionHistory.
     * @param {ExecutionHistoryUpsertArgs} args - Arguments to update or create a ExecutionHistory.
     * @example
     * // Update or create a ExecutionHistory
     * const executionHistory = await prisma.executionHistory.upsert({
     *   create: {
     *     // ... data to create a ExecutionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExecutionHistory we want to update
     *   }
     * })
     */
    upsert<T extends ExecutionHistoryUpsertArgs>(args: SelectSubset<T, ExecutionHistoryUpsertArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExecutionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryCountArgs} args - Arguments to filter ExecutionHistories to count.
     * @example
     * // Count the number of ExecutionHistories
     * const count = await prisma.executionHistory.count({
     *   where: {
     *     // ... the filter for the ExecutionHistories we want to count
     *   }
     * })
    **/
    count<T extends ExecutionHistoryCountArgs>(
      args?: Subset<T, ExecutionHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutionHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExecutionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExecutionHistoryAggregateArgs>(args: Subset<T, ExecutionHistoryAggregateArgs>): Prisma.PrismaPromise<GetExecutionHistoryAggregateType<T>>

    /**
     * Group by ExecutionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryGroupByArgs} args - Group by arguments.
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
      T extends ExecutionHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutionHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ExecutionHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExecutionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExecutionHistory model
   */
  readonly fields: ExecutionHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExecutionHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutionHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExecutionHistory model
   */
  interface ExecutionHistoryFieldRefs {
    readonly id: FieldRef<"ExecutionHistory", 'String'>
    readonly user_id: FieldRef<"ExecutionHistory", 'String'>
    readonly match_id: FieldRef<"ExecutionHistory", 'String'>
    readonly code: FieldRef<"ExecutionHistory", 'String'>
    readonly output: FieldRef<"ExecutionHistory", 'String'>
    readonly createdAt: FieldRef<"ExecutionHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"ExecutionHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExecutionHistory findUnique
   */
  export type ExecutionHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionHistory to fetch.
     */
    where: ExecutionHistoryWhereUniqueInput
  }

  /**
   * ExecutionHistory findUniqueOrThrow
   */
  export type ExecutionHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionHistory to fetch.
     */
    where: ExecutionHistoryWhereUniqueInput
  }

  /**
   * ExecutionHistory findFirst
   */
  export type ExecutionHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionHistory to fetch.
     */
    where?: ExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionHistories to fetch.
     */
    orderBy?: ExecutionHistoryOrderByWithRelationInput | ExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionHistories.
     */
    cursor?: ExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionHistories.
     */
    distinct?: ExecutionHistoryScalarFieldEnum | ExecutionHistoryScalarFieldEnum[]
  }

  /**
   * ExecutionHistory findFirstOrThrow
   */
  export type ExecutionHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionHistory to fetch.
     */
    where?: ExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionHistories to fetch.
     */
    orderBy?: ExecutionHistoryOrderByWithRelationInput | ExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionHistories.
     */
    cursor?: ExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionHistories.
     */
    distinct?: ExecutionHistoryScalarFieldEnum | ExecutionHistoryScalarFieldEnum[]
  }

  /**
   * ExecutionHistory findMany
   */
  export type ExecutionHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionHistories to fetch.
     */
    where?: ExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionHistories to fetch.
     */
    orderBy?: ExecutionHistoryOrderByWithRelationInput | ExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExecutionHistories.
     */
    cursor?: ExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionHistories.
     */
    skip?: number
    distinct?: ExecutionHistoryScalarFieldEnum | ExecutionHistoryScalarFieldEnum[]
  }

  /**
   * ExecutionHistory create
   */
  export type ExecutionHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ExecutionHistory.
     */
    data: XOR<ExecutionHistoryCreateInput, ExecutionHistoryUncheckedCreateInput>
  }

  /**
   * ExecutionHistory createMany
   */
  export type ExecutionHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExecutionHistories.
     */
    data: ExecutionHistoryCreateManyInput | ExecutionHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExecutionHistory createManyAndReturn
   */
  export type ExecutionHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ExecutionHistories.
     */
    data: ExecutionHistoryCreateManyInput | ExecutionHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionHistory update
   */
  export type ExecutionHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ExecutionHistory.
     */
    data: XOR<ExecutionHistoryUpdateInput, ExecutionHistoryUncheckedUpdateInput>
    /**
     * Choose, which ExecutionHistory to update.
     */
    where: ExecutionHistoryWhereUniqueInput
  }

  /**
   * ExecutionHistory updateMany
   */
  export type ExecutionHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExecutionHistories.
     */
    data: XOR<ExecutionHistoryUpdateManyMutationInput, ExecutionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionHistories to update
     */
    where?: ExecutionHistoryWhereInput
    /**
     * Limit how many ExecutionHistories to update.
     */
    limit?: number
  }

  /**
   * ExecutionHistory updateManyAndReturn
   */
  export type ExecutionHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ExecutionHistories.
     */
    data: XOR<ExecutionHistoryUpdateManyMutationInput, ExecutionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionHistories to update
     */
    where?: ExecutionHistoryWhereInput
    /**
     * Limit how many ExecutionHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionHistory upsert
   */
  export type ExecutionHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ExecutionHistory to update in case it exists.
     */
    where: ExecutionHistoryWhereUniqueInput
    /**
     * In case the ExecutionHistory found by the `where` argument doesn't exist, create a new ExecutionHistory with this data.
     */
    create: XOR<ExecutionHistoryCreateInput, ExecutionHistoryUncheckedCreateInput>
    /**
     * In case the ExecutionHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutionHistoryUpdateInput, ExecutionHistoryUncheckedUpdateInput>
  }

  /**
   * ExecutionHistory delete
   */
  export type ExecutionHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter which ExecutionHistory to delete.
     */
    where: ExecutionHistoryWhereUniqueInput
  }

  /**
   * ExecutionHistory deleteMany
   */
  export type ExecutionHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionHistories to delete
     */
    where?: ExecutionHistoryWhereInput
    /**
     * Limit how many ExecutionHistories to delete.
     */
    limit?: number
  }

  /**
   * ExecutionHistory without action
   */
  export type ExecutionHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    match_id: string | null
    sender_id: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    match_id: string | null
    sender_id: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    match_id: number
    sender_id: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    match_id?: true
    sender_id?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    match_id?: true
    sender_id?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    match_id?: true
    sender_id?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    match_id: string
    sender_id: string
    message: string
    createdAt: Date
    updatedAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    match_id?: boolean
    sender_id?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    match_id?: boolean
    sender_id?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    match_id?: boolean
    sender_id?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    match_id?: boolean
    sender_id?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "match_id" | "sender_id" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      match: Prisma.$MatchPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      match_id: string
      sender_id: string
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly match_id: FieldRef<"ChatMessage", 'String'>
    readonly sender_id: FieldRef<"ChatMessage", 'String'>
    readonly message: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
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
    first_name: 'first_name',
    last_name: 'last_name',
    avatar_url: 'avatar_url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PlayerProfileScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    rank: 'rank',
    rating: 'rating',
    region: 'region',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlayerProfileScalarFieldEnum = (typeof PlayerProfileScalarFieldEnum)[keyof typeof PlayerProfileScalarFieldEnum]


  export const RatingHistoryScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    old_rating: 'old_rating',
    new_rating: 'new_rating',
    reason: 'reason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RatingHistoryScalarFieldEnum = (typeof RatingHistoryScalarFieldEnum)[keyof typeof RatingHistoryScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    player1_id: 'player1_id',
    player2_id: 'player2_id',
    winner_id: 'winner_id',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    receiver_id: 'receiver_id',
    type: 'type',
    message: 'message',
    read: 'read',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const MatchInviteScalarFieldEnum: {
    id: 'id',
    match_id: 'match_id',
    sender_id: 'sender_id',
    receiver_id: 'receiver_id',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchInviteScalarFieldEnum = (typeof MatchInviteScalarFieldEnum)[keyof typeof MatchInviteScalarFieldEnum]


  export const ExecutionHistoryScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    match_id: 'match_id',
    code: 'code',
    output: 'output',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExecutionHistoryScalarFieldEnum = (typeof ExecutionHistoryScalarFieldEnum)[keyof typeof ExecutionHistoryScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    match_id: 'match_id',
    sender_id: 'sender_id',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PlayerStatus'
   */
  export type EnumPlayerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlayerStatus'>
    


  /**
   * Reference to a field of type 'PlayerStatus[]'
   */
  export type ListEnumPlayerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlayerStatus[]'>
    


  /**
   * Reference to a field of type 'RatingReason'
   */
  export type EnumRatingReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RatingReason'>
    


  /**
   * Reference to a field of type 'RatingReason[]'
   */
  export type ListEnumRatingReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RatingReason[]'>
    


  /**
   * Reference to a field of type 'MatchStatus'
   */
  export type EnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus'>
    


  /**
   * Reference to a field of type 'MatchStatus[]'
   */
  export type ListEnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MatchInviteStatus'
   */
  export type EnumMatchInviteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchInviteStatus'>
    


  /**
   * Reference to a field of type 'MatchInviteStatus[]'
   */
  export type ListEnumMatchInviteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchInviteStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    avatar_url?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    PlayerProfile?: PlayerProfileListRelationFilter
    RatingHistory?: RatingHistoryListRelationFilter
    matchesAsPlayer1?: MatchListRelationFilter
    matchesAsPlayer2?: MatchListRelationFilter
    matchesAsWinner?: MatchListRelationFilter
    Notification?: NotificationListRelationFilter
    sentInvites?: MatchInviteListRelationFilter
    receivedInvites?: MatchInviteListRelationFilter
    ExecutionHistory?: ExecutionHistoryListRelationFilter
    ChatMessage?: ChatMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    PlayerProfile?: PlayerProfileOrderByRelationAggregateInput
    RatingHistory?: RatingHistoryOrderByRelationAggregateInput
    matchesAsPlayer1?: MatchOrderByRelationAggregateInput
    matchesAsPlayer2?: MatchOrderByRelationAggregateInput
    matchesAsWinner?: MatchOrderByRelationAggregateInput
    Notification?: NotificationOrderByRelationAggregateInput
    sentInvites?: MatchInviteOrderByRelationAggregateInput
    receivedInvites?: MatchInviteOrderByRelationAggregateInput
    ExecutionHistory?: ExecutionHistoryOrderByRelationAggregateInput
    ChatMessage?: ChatMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    avatar_url?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    PlayerProfile?: PlayerProfileListRelationFilter
    RatingHistory?: RatingHistoryListRelationFilter
    matchesAsPlayer1?: MatchListRelationFilter
    matchesAsPlayer2?: MatchListRelationFilter
    matchesAsWinner?: MatchListRelationFilter
    Notification?: NotificationListRelationFilter
    sentInvites?: MatchInviteListRelationFilter
    receivedInvites?: MatchInviteListRelationFilter
    ExecutionHistory?: ExecutionHistoryListRelationFilter
    ChatMessage?: ChatMessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar_url?: SortOrder
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
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    avatar_url?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PlayerProfileWhereInput = {
    AND?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    OR?: PlayerProfileWhereInput[]
    NOT?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    id?: StringFilter<"PlayerProfile"> | string
    user_id?: StringFilter<"PlayerProfile"> | string
    rank?: IntFilter<"PlayerProfile"> | number
    rating?: IntFilter<"PlayerProfile"> | number
    region?: StringFilter<"PlayerProfile"> | string
    status?: EnumPlayerStatusFilter<"PlayerProfile"> | $Enums.PlayerStatus
    createdAt?: DateTimeFilter<"PlayerProfile"> | Date | string
    updatedAt?: DateTimeFilter<"PlayerProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlayerProfileOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    rank?: SortOrder
    rating?: SortOrder
    region?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PlayerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    OR?: PlayerProfileWhereInput[]
    NOT?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    user_id?: StringFilter<"PlayerProfile"> | string
    rank?: IntFilter<"PlayerProfile"> | number
    rating?: IntFilter<"PlayerProfile"> | number
    region?: StringFilter<"PlayerProfile"> | string
    status?: EnumPlayerStatusFilter<"PlayerProfile"> | $Enums.PlayerStatus
    createdAt?: DateTimeFilter<"PlayerProfile"> | Date | string
    updatedAt?: DateTimeFilter<"PlayerProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PlayerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    rank?: SortOrder
    rating?: SortOrder
    region?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlayerProfileCountOrderByAggregateInput
    _avg?: PlayerProfileAvgOrderByAggregateInput
    _max?: PlayerProfileMaxOrderByAggregateInput
    _min?: PlayerProfileMinOrderByAggregateInput
    _sum?: PlayerProfileSumOrderByAggregateInput
  }

  export type PlayerProfileScalarWhereWithAggregatesInput = {
    AND?: PlayerProfileScalarWhereWithAggregatesInput | PlayerProfileScalarWhereWithAggregatesInput[]
    OR?: PlayerProfileScalarWhereWithAggregatesInput[]
    NOT?: PlayerProfileScalarWhereWithAggregatesInput | PlayerProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerProfile"> | string
    user_id?: StringWithAggregatesFilter<"PlayerProfile"> | string
    rank?: IntWithAggregatesFilter<"PlayerProfile"> | number
    rating?: IntWithAggregatesFilter<"PlayerProfile"> | number
    region?: StringWithAggregatesFilter<"PlayerProfile"> | string
    status?: EnumPlayerStatusWithAggregatesFilter<"PlayerProfile"> | $Enums.PlayerStatus
    createdAt?: DateTimeWithAggregatesFilter<"PlayerProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlayerProfile"> | Date | string
  }

  export type RatingHistoryWhereInput = {
    AND?: RatingHistoryWhereInput | RatingHistoryWhereInput[]
    OR?: RatingHistoryWhereInput[]
    NOT?: RatingHistoryWhereInput | RatingHistoryWhereInput[]
    id?: StringFilter<"RatingHistory"> | string
    user_id?: StringFilter<"RatingHistory"> | string
    old_rating?: IntFilter<"RatingHistory"> | number
    new_rating?: IntFilter<"RatingHistory"> | number
    reason?: EnumRatingReasonFilter<"RatingHistory"> | $Enums.RatingReason
    createdAt?: DateTimeFilter<"RatingHistory"> | Date | string
    updatedAt?: DateTimeFilter<"RatingHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RatingHistoryOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    old_rating?: SortOrder
    new_rating?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RatingHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RatingHistoryWhereInput | RatingHistoryWhereInput[]
    OR?: RatingHistoryWhereInput[]
    NOT?: RatingHistoryWhereInput | RatingHistoryWhereInput[]
    user_id?: StringFilter<"RatingHistory"> | string
    old_rating?: IntFilter<"RatingHistory"> | number
    new_rating?: IntFilter<"RatingHistory"> | number
    reason?: EnumRatingReasonFilter<"RatingHistory"> | $Enums.RatingReason
    createdAt?: DateTimeFilter<"RatingHistory"> | Date | string
    updatedAt?: DateTimeFilter<"RatingHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RatingHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    old_rating?: SortOrder
    new_rating?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RatingHistoryCountOrderByAggregateInput
    _avg?: RatingHistoryAvgOrderByAggregateInput
    _max?: RatingHistoryMaxOrderByAggregateInput
    _min?: RatingHistoryMinOrderByAggregateInput
    _sum?: RatingHistorySumOrderByAggregateInput
  }

  export type RatingHistoryScalarWhereWithAggregatesInput = {
    AND?: RatingHistoryScalarWhereWithAggregatesInput | RatingHistoryScalarWhereWithAggregatesInput[]
    OR?: RatingHistoryScalarWhereWithAggregatesInput[]
    NOT?: RatingHistoryScalarWhereWithAggregatesInput | RatingHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RatingHistory"> | string
    user_id?: StringWithAggregatesFilter<"RatingHistory"> | string
    old_rating?: IntWithAggregatesFilter<"RatingHistory"> | number
    new_rating?: IntWithAggregatesFilter<"RatingHistory"> | number
    reason?: EnumRatingReasonWithAggregatesFilter<"RatingHistory"> | $Enums.RatingReason
    createdAt?: DateTimeWithAggregatesFilter<"RatingHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RatingHistory"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    player1_id?: StringFilter<"Match"> | string
    player2_id?: StringFilter<"Match"> | string
    winner_id?: StringFilter<"Match"> | string
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserScalarRelationFilter, UserWhereInput>
    winner?: XOR<UserScalarRelationFilter, UserWhereInput>
    MatchInvite?: MatchInviteListRelationFilter
    ExecutionHistory?: ExecutionHistoryListRelationFilter
    ChatMessage?: ChatMessageListRelationFilter
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    player1_id?: SortOrder
    player2_id?: SortOrder
    winner_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    player1?: UserOrderByWithRelationInput
    player2?: UserOrderByWithRelationInput
    winner?: UserOrderByWithRelationInput
    MatchInvite?: MatchInviteOrderByRelationAggregateInput
    ExecutionHistory?: ExecutionHistoryOrderByRelationAggregateInput
    ChatMessage?: ChatMessageOrderByRelationAggregateInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    player1_id?: StringFilter<"Match"> | string
    player2_id?: StringFilter<"Match"> | string
    winner_id?: StringFilter<"Match"> | string
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserScalarRelationFilter, UserWhereInput>
    winner?: XOR<UserScalarRelationFilter, UserWhereInput>
    MatchInvite?: MatchInviteListRelationFilter
    ExecutionHistory?: ExecutionHistoryListRelationFilter
    ChatMessage?: ChatMessageListRelationFilter
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    player1_id?: SortOrder
    player2_id?: SortOrder
    winner_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    player1_id?: StringWithAggregatesFilter<"Match"> | string
    player2_id?: StringWithAggregatesFilter<"Match"> | string
    winner_id?: StringWithAggregatesFilter<"Match"> | string
    status?: EnumMatchStatusWithAggregatesFilter<"Match"> | $Enums.MatchStatus
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    receiver_id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    receiver_id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    receiver?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    receiver_id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    receiver_id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    receiver_id?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    message?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type MatchInviteWhereInput = {
    AND?: MatchInviteWhereInput | MatchInviteWhereInput[]
    OR?: MatchInviteWhereInput[]
    NOT?: MatchInviteWhereInput | MatchInviteWhereInput[]
    id?: StringFilter<"MatchInvite"> | string
    match_id?: StringFilter<"MatchInvite"> | string
    sender_id?: StringFilter<"MatchInvite"> | string
    receiver_id?: StringFilter<"MatchInvite"> | string
    status?: EnumMatchInviteStatusFilter<"MatchInvite"> | $Enums.MatchInviteStatus
    createdAt?: DateTimeFilter<"MatchInvite"> | Date | string
    updatedAt?: DateTimeFilter<"MatchInvite"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MatchInviteOrderByWithRelationInput = {
    id?: SortOrder
    match_id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    match?: MatchOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type MatchInviteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchInviteWhereInput | MatchInviteWhereInput[]
    OR?: MatchInviteWhereInput[]
    NOT?: MatchInviteWhereInput | MatchInviteWhereInput[]
    match_id?: StringFilter<"MatchInvite"> | string
    sender_id?: StringFilter<"MatchInvite"> | string
    receiver_id?: StringFilter<"MatchInvite"> | string
    status?: EnumMatchInviteStatusFilter<"MatchInvite"> | $Enums.MatchInviteStatus
    createdAt?: DateTimeFilter<"MatchInvite"> | Date | string
    updatedAt?: DateTimeFilter<"MatchInvite"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MatchInviteOrderByWithAggregationInput = {
    id?: SortOrder
    match_id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchInviteCountOrderByAggregateInput
    _max?: MatchInviteMaxOrderByAggregateInput
    _min?: MatchInviteMinOrderByAggregateInput
  }

  export type MatchInviteScalarWhereWithAggregatesInput = {
    AND?: MatchInviteScalarWhereWithAggregatesInput | MatchInviteScalarWhereWithAggregatesInput[]
    OR?: MatchInviteScalarWhereWithAggregatesInput[]
    NOT?: MatchInviteScalarWhereWithAggregatesInput | MatchInviteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchInvite"> | string
    match_id?: StringWithAggregatesFilter<"MatchInvite"> | string
    sender_id?: StringWithAggregatesFilter<"MatchInvite"> | string
    receiver_id?: StringWithAggregatesFilter<"MatchInvite"> | string
    status?: EnumMatchInviteStatusWithAggregatesFilter<"MatchInvite"> | $Enums.MatchInviteStatus
    createdAt?: DateTimeWithAggregatesFilter<"MatchInvite"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MatchInvite"> | Date | string
  }

  export type ExecutionHistoryWhereInput = {
    AND?: ExecutionHistoryWhereInput | ExecutionHistoryWhereInput[]
    OR?: ExecutionHistoryWhereInput[]
    NOT?: ExecutionHistoryWhereInput | ExecutionHistoryWhereInput[]
    id?: StringFilter<"ExecutionHistory"> | string
    user_id?: StringFilter<"ExecutionHistory"> | string
    match_id?: StringFilter<"ExecutionHistory"> | string
    code?: StringFilter<"ExecutionHistory"> | string
    output?: StringFilter<"ExecutionHistory"> | string
    createdAt?: DateTimeFilter<"ExecutionHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ExecutionHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
  }

  export type ExecutionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    match_id?: SortOrder
    code?: SortOrder
    output?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    match?: MatchOrderByWithRelationInput
  }

  export type ExecutionHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExecutionHistoryWhereInput | ExecutionHistoryWhereInput[]
    OR?: ExecutionHistoryWhereInput[]
    NOT?: ExecutionHistoryWhereInput | ExecutionHistoryWhereInput[]
    user_id?: StringFilter<"ExecutionHistory"> | string
    match_id?: StringFilter<"ExecutionHistory"> | string
    code?: StringFilter<"ExecutionHistory"> | string
    output?: StringFilter<"ExecutionHistory"> | string
    createdAt?: DateTimeFilter<"ExecutionHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ExecutionHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
  }, "id">

  export type ExecutionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    match_id?: SortOrder
    code?: SortOrder
    output?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExecutionHistoryCountOrderByAggregateInput
    _max?: ExecutionHistoryMaxOrderByAggregateInput
    _min?: ExecutionHistoryMinOrderByAggregateInput
  }

  export type ExecutionHistoryScalarWhereWithAggregatesInput = {
    AND?: ExecutionHistoryScalarWhereWithAggregatesInput | ExecutionHistoryScalarWhereWithAggregatesInput[]
    OR?: ExecutionHistoryScalarWhereWithAggregatesInput[]
    NOT?: ExecutionHistoryScalarWhereWithAggregatesInput | ExecutionHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExecutionHistory"> | string
    user_id?: StringWithAggregatesFilter<"ExecutionHistory"> | string
    match_id?: StringWithAggregatesFilter<"ExecutionHistory"> | string
    code?: StringWithAggregatesFilter<"ExecutionHistory"> | string
    output?: StringWithAggregatesFilter<"ExecutionHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExecutionHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExecutionHistory"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    match_id?: StringFilter<"ChatMessage"> | string
    sender_id?: StringFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    match_id?: SortOrder
    sender_id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    match?: MatchOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    match_id?: StringFilter<"ChatMessage"> | string
    sender_id?: StringFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    match_id?: SortOrder
    sender_id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    match_id?: StringWithAggregatesFilter<"ChatMessage"> | string
    sender_id?: StringWithAggregatesFilter<"ChatMessage"> | string
    message?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileCreateNestedManyWithoutUserInput
    RatingHistory?: RatingHistoryCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsWinner?: MatchCreateNestedManyWithoutWinnerInput
    Notification?: NotificationCreateNestedManyWithoutReceiverInput
    sentInvites?: MatchInviteCreateNestedManyWithoutSenderInput
    receivedInvites?: MatchInviteCreateNestedManyWithoutReceiverInput
    ExecutionHistory?: ExecutionHistoryCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileUncheckedCreateNestedManyWithoutUserInput
    RatingHistory?: RatingHistoryUncheckedCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsWinner?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    sentInvites?: MatchInviteUncheckedCreateNestedManyWithoutSenderInput
    receivedInvites?: MatchInviteUncheckedCreateNestedManyWithoutReceiverInput
    ExecutionHistory?: ExecutionHistoryUncheckedCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUpdateManyWithoutUserNestedInput
    RatingHistory?: RatingHistoryUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsWinner?: MatchUpdateManyWithoutWinnerNestedInput
    Notification?: NotificationUpdateManyWithoutReceiverNestedInput
    sentInvites?: MatchInviteUpdateManyWithoutSenderNestedInput
    receivedInvites?: MatchInviteUpdateManyWithoutReceiverNestedInput
    ExecutionHistory?: ExecutionHistoryUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUncheckedUpdateManyWithoutUserNestedInput
    RatingHistory?: RatingHistoryUncheckedUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsWinner?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    sentInvites?: MatchInviteUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvites?: MatchInviteUncheckedUpdateManyWithoutReceiverNestedInput
    ExecutionHistory?: ExecutionHistoryUncheckedUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerProfileCreateInput = {
    id?: string
    rank: number
    rating: number
    region: string
    status?: $Enums.PlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlayerProfileInput
  }

  export type PlayerProfileUncheckedCreateInput = {
    id?: string
    user_id: string
    rank: number
    rating: number
    region: string
    status?: $Enums.PlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    status?: EnumPlayerStatusFieldUpdateOperationsInput | $Enums.PlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlayerProfileNestedInput
  }

  export type PlayerProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    status?: EnumPlayerStatusFieldUpdateOperationsInput | $Enums.PlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerProfileCreateManyInput = {
    id?: string
    user_id: string
    rank: number
    rating: number
    region: string
    status?: $Enums.PlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    status?: EnumPlayerStatusFieldUpdateOperationsInput | $Enums.PlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    status?: EnumPlayerStatusFieldUpdateOperationsInput | $Enums.PlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingHistoryCreateInput = {
    id?: string
    old_rating: number
    new_rating: number
    reason: $Enums.RatingReason
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRatingHistoryInput
  }

  export type RatingHistoryUncheckedCreateInput = {
    id?: string
    user_id: string
    old_rating: number
    new_rating: number
    reason: $Enums.RatingReason
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    old_rating?: IntFieldUpdateOperationsInput | number
    new_rating?: IntFieldUpdateOperationsInput | number
    reason?: EnumRatingReasonFieldUpdateOperationsInput | $Enums.RatingReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRatingHistoryNestedInput
  }

  export type RatingHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    old_rating?: IntFieldUpdateOperationsInput | number
    new_rating?: IntFieldUpdateOperationsInput | number
    reason?: EnumRatingReasonFieldUpdateOperationsInput | $Enums.RatingReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingHistoryCreateManyInput = {
    id?: string
    user_id: string
    old_rating: number
    new_rating: number
    reason: $Enums.RatingReason
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    old_rating?: IntFieldUpdateOperationsInput | number
    new_rating?: IntFieldUpdateOperationsInput | number
    reason?: EnumRatingReasonFieldUpdateOperationsInput | $Enums.RatingReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    old_rating?: IntFieldUpdateOperationsInput | number
    new_rating?: IntFieldUpdateOperationsInput | number
    reason?: EnumRatingReasonFieldUpdateOperationsInput | $Enums.RatingReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    id?: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    player1: UserCreateNestedOneWithoutMatchesAsPlayer1Input
    player2: UserCreateNestedOneWithoutMatchesAsPlayer2Input
    winner: UserCreateNestedOneWithoutMatchesAsWinnerInput
    MatchInvite?: MatchInviteCreateNestedManyWithoutMatchInput
    ExecutionHistory?: ExecutionHistoryCreateNestedManyWithoutMatchInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    player1_id: string
    player2_id: string
    winner_id: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    MatchInvite?: MatchInviteUncheckedCreateNestedManyWithoutMatchInput
    ExecutionHistory?: ExecutionHistoryUncheckedCreateNestedManyWithoutMatchInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutMatchesAsPlayer1NestedInput
    player2?: UserUpdateOneRequiredWithoutMatchesAsPlayer2NestedInput
    winner?: UserUpdateOneRequiredWithoutMatchesAsWinnerNestedInput
    MatchInvite?: MatchInviteUpdateManyWithoutMatchNestedInput
    ExecutionHistory?: ExecutionHistoryUpdateManyWithoutMatchNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1_id?: StringFieldUpdateOperationsInput | string
    player2_id?: StringFieldUpdateOperationsInput | string
    winner_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MatchInvite?: MatchInviteUncheckedUpdateManyWithoutMatchNestedInput
    ExecutionHistory?: ExecutionHistoryUncheckedUpdateManyWithoutMatchNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchCreateManyInput = {
    id?: string
    player1_id: string
    player2_id: string
    winner_id: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1_id?: StringFieldUpdateOperationsInput | string
    player2_id?: StringFieldUpdateOperationsInput | string
    winner_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    receiver: UserCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    receiver_id: string
    type: $Enums.NotificationType
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    receiver_id: string
    type: $Enums.NotificationType
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchInviteCreateInput = {
    id?: string
    status?: $Enums.MatchInviteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    match: MatchCreateNestedOneWithoutMatchInviteInput
    sender: UserCreateNestedOneWithoutSentInvitesInput
    receiver: UserCreateNestedOneWithoutReceivedInvitesInput
  }

  export type MatchInviteUncheckedCreateInput = {
    id?: string
    match_id: string
    sender_id: string
    receiver_id: string
    status?: $Enums.MatchInviteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchInviteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchInviteStatusFieldUpdateOperationsInput | $Enums.MatchInviteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutMatchInviteNestedInput
    sender?: UserUpdateOneRequiredWithoutSentInvitesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedInvitesNestedInput
  }

  export type MatchInviteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    match_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchInviteStatusFieldUpdateOperationsInput | $Enums.MatchInviteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchInviteCreateManyInput = {
    id?: string
    match_id: string
    sender_id: string
    receiver_id: string
    status?: $Enums.MatchInviteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchInviteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchInviteStatusFieldUpdateOperationsInput | $Enums.MatchInviteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchInviteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    match_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchInviteStatusFieldUpdateOperationsInput | $Enums.MatchInviteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionHistoryCreateInput = {
    id?: string
    code: string
    output: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutExecutionHistoryInput
    match: MatchCreateNestedOneWithoutExecutionHistoryInput
  }

  export type ExecutionHistoryUncheckedCreateInput = {
    id?: string
    user_id: string
    match_id: string
    code: string
    output: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExecutionHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExecutionHistoryNestedInput
    match?: MatchUpdateOneRequiredWithoutExecutionHistoryNestedInput
  }

  export type ExecutionHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    match_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionHistoryCreateManyInput = {
    id?: string
    user_id: string
    match_id: string
    code: string
    output: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExecutionHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    match_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    match: MatchCreateNestedOneWithoutChatMessageInput
    sender: UserCreateNestedOneWithoutChatMessageInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    match_id: string
    sender_id: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutChatMessageNestedInput
    sender?: UserUpdateOneRequiredWithoutChatMessageNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    match_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    match_id: string
    sender_id: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    match_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
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

  export type PlayerProfileListRelationFilter = {
    every?: PlayerProfileWhereInput
    some?: PlayerProfileWhereInput
    none?: PlayerProfileWhereInput
  }

  export type RatingHistoryListRelationFilter = {
    every?: RatingHistoryWhereInput
    some?: RatingHistoryWhereInput
    none?: RatingHistoryWhereInput
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type MatchInviteListRelationFilter = {
    every?: MatchInviteWhereInput
    some?: MatchInviteWhereInput
    none?: MatchInviteWhereInput
  }

  export type ExecutionHistoryListRelationFilter = {
    every?: ExecutionHistoryWhereInput
    some?: ExecutionHistoryWhereInput
    none?: ExecutionHistoryWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type PlayerProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchInviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExecutionHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    avatar_url?: SortOrder
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumPlayerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerStatus | EnumPlayerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerStatus[] | ListEnumPlayerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerStatus[] | ListEnumPlayerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerStatusFilter<$PrismaModel> | $Enums.PlayerStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlayerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rank?: SortOrder
    rating?: SortOrder
    region?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerProfileAvgOrderByAggregateInput = {
    rank?: SortOrder
    rating?: SortOrder
  }

  export type PlayerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rank?: SortOrder
    rating?: SortOrder
    region?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    rank?: SortOrder
    rating?: SortOrder
    region?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerProfileSumOrderByAggregateInput = {
    rank?: SortOrder
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumPlayerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerStatus | EnumPlayerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerStatus[] | ListEnumPlayerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerStatus[] | ListEnumPlayerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlayerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlayerStatusFilter<$PrismaModel>
    _max?: NestedEnumPlayerStatusFilter<$PrismaModel>
  }

  export type EnumRatingReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.RatingReason | EnumRatingReasonFieldRefInput<$PrismaModel>
    in?: $Enums.RatingReason[] | ListEnumRatingReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.RatingReason[] | ListEnumRatingReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumRatingReasonFilter<$PrismaModel> | $Enums.RatingReason
  }

  export type RatingHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    old_rating?: SortOrder
    new_rating?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingHistoryAvgOrderByAggregateInput = {
    old_rating?: SortOrder
    new_rating?: SortOrder
  }

  export type RatingHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    old_rating?: SortOrder
    new_rating?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    old_rating?: SortOrder
    new_rating?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingHistorySumOrderByAggregateInput = {
    old_rating?: SortOrder
    new_rating?: SortOrder
  }

  export type EnumRatingReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RatingReason | EnumRatingReasonFieldRefInput<$PrismaModel>
    in?: $Enums.RatingReason[] | ListEnumRatingReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.RatingReason[] | ListEnumRatingReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumRatingReasonWithAggregatesFilter<$PrismaModel> | $Enums.RatingReason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRatingReasonFilter<$PrismaModel>
    _max?: NestedEnumRatingReasonFilter<$PrismaModel>
  }

  export type EnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    player1_id?: SortOrder
    player2_id?: SortOrder
    winner_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    player1_id?: SortOrder
    player2_id?: SortOrder
    winner_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    player1_id?: SortOrder
    player2_id?: SortOrder
    winner_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    receiver_id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    receiver_id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    receiver_id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumMatchInviteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchInviteStatus | EnumMatchInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchInviteStatus[] | ListEnumMatchInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchInviteStatus[] | ListEnumMatchInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchInviteStatusFilter<$PrismaModel> | $Enums.MatchInviteStatus
  }

  export type MatchScalarRelationFilter = {
    is?: MatchWhereInput
    isNot?: MatchWhereInput
  }

  export type MatchInviteCountOrderByAggregateInput = {
    id?: SortOrder
    match_id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchInviteMaxOrderByAggregateInput = {
    id?: SortOrder
    match_id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchInviteMinOrderByAggregateInput = {
    id?: SortOrder
    match_id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMatchInviteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchInviteStatus | EnumMatchInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchInviteStatus[] | ListEnumMatchInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchInviteStatus[] | ListEnumMatchInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchInviteStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchInviteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchInviteStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchInviteStatusFilter<$PrismaModel>
  }

  export type ExecutionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    match_id?: SortOrder
    code?: SortOrder
    output?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExecutionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    match_id?: SortOrder
    code?: SortOrder
    output?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExecutionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    match_id?: SortOrder
    code?: SortOrder
    output?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    match_id?: SortOrder
    sender_id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    match_id?: SortOrder
    sender_id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    match_id?: SortOrder
    sender_id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput> | PlayerProfileCreateWithoutUserInput[] | PlayerProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutUserInput | PlayerProfileCreateOrConnectWithoutUserInput[]
    createMany?: PlayerProfileCreateManyUserInputEnvelope
    connect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
  }

  export type RatingHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingHistoryCreateWithoutUserInput, RatingHistoryUncheckedCreateWithoutUserInput> | RatingHistoryCreateWithoutUserInput[] | RatingHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingHistoryCreateOrConnectWithoutUserInput | RatingHistoryCreateOrConnectWithoutUserInput[]
    createMany?: RatingHistoryCreateManyUserInputEnvelope
    connect?: RatingHistoryWhereUniqueInput | RatingHistoryWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutReceiverInput = {
    create?: XOR<NotificationCreateWithoutReceiverInput, NotificationUncheckedCreateWithoutReceiverInput> | NotificationCreateWithoutReceiverInput[] | NotificationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReceiverInput | NotificationCreateOrConnectWithoutReceiverInput[]
    createMany?: NotificationCreateManyReceiverInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type MatchInviteCreateNestedManyWithoutSenderInput = {
    create?: XOR<MatchInviteCreateWithoutSenderInput, MatchInviteUncheckedCreateWithoutSenderInput> | MatchInviteCreateWithoutSenderInput[] | MatchInviteUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MatchInviteCreateOrConnectWithoutSenderInput | MatchInviteCreateOrConnectWithoutSenderInput[]
    createMany?: MatchInviteCreateManySenderInputEnvelope
    connect?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
  }

  export type MatchInviteCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MatchInviteCreateWithoutReceiverInput, MatchInviteUncheckedCreateWithoutReceiverInput> | MatchInviteCreateWithoutReceiverInput[] | MatchInviteUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MatchInviteCreateOrConnectWithoutReceiverInput | MatchInviteCreateOrConnectWithoutReceiverInput[]
    createMany?: MatchInviteCreateManyReceiverInputEnvelope
    connect?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
  }

  export type ExecutionHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<ExecutionHistoryCreateWithoutUserInput, ExecutionHistoryUncheckedCreateWithoutUserInput> | ExecutionHistoryCreateWithoutUserInput[] | ExecutionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutUserInput | ExecutionHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ExecutionHistoryCreateManyUserInputEnvelope
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type PlayerProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput> | PlayerProfileCreateWithoutUserInput[] | PlayerProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutUserInput | PlayerProfileCreateOrConnectWithoutUserInput[]
    createMany?: PlayerProfileCreateManyUserInputEnvelope
    connect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
  }

  export type RatingHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingHistoryCreateWithoutUserInput, RatingHistoryUncheckedCreateWithoutUserInput> | RatingHistoryCreateWithoutUserInput[] | RatingHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingHistoryCreateOrConnectWithoutUserInput | RatingHistoryCreateOrConnectWithoutUserInput[]
    createMany?: RatingHistoryCreateManyUserInputEnvelope
    connect?: RatingHistoryWhereUniqueInput | RatingHistoryWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<NotificationCreateWithoutReceiverInput, NotificationUncheckedCreateWithoutReceiverInput> | NotificationCreateWithoutReceiverInput[] | NotificationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReceiverInput | NotificationCreateOrConnectWithoutReceiverInput[]
    createMany?: NotificationCreateManyReceiverInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type MatchInviteUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MatchInviteCreateWithoutSenderInput, MatchInviteUncheckedCreateWithoutSenderInput> | MatchInviteCreateWithoutSenderInput[] | MatchInviteUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MatchInviteCreateOrConnectWithoutSenderInput | MatchInviteCreateOrConnectWithoutSenderInput[]
    createMany?: MatchInviteCreateManySenderInputEnvelope
    connect?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
  }

  export type MatchInviteUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MatchInviteCreateWithoutReceiverInput, MatchInviteUncheckedCreateWithoutReceiverInput> | MatchInviteCreateWithoutReceiverInput[] | MatchInviteUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MatchInviteCreateOrConnectWithoutReceiverInput | MatchInviteCreateOrConnectWithoutReceiverInput[]
    createMany?: MatchInviteCreateManyReceiverInputEnvelope
    connect?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
  }

  export type ExecutionHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExecutionHistoryCreateWithoutUserInput, ExecutionHistoryUncheckedCreateWithoutUserInput> | ExecutionHistoryCreateWithoutUserInput[] | ExecutionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutUserInput | ExecutionHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ExecutionHistoryCreateManyUserInputEnvelope
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlayerProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput> | PlayerProfileCreateWithoutUserInput[] | PlayerProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutUserInput | PlayerProfileCreateOrConnectWithoutUserInput[]
    upsert?: PlayerProfileUpsertWithWhereUniqueWithoutUserInput | PlayerProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlayerProfileCreateManyUserInputEnvelope
    set?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    disconnect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    delete?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    connect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    update?: PlayerProfileUpdateWithWhereUniqueWithoutUserInput | PlayerProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlayerProfileUpdateManyWithWhereWithoutUserInput | PlayerProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlayerProfileScalarWhereInput | PlayerProfileScalarWhereInput[]
  }

  export type RatingHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingHistoryCreateWithoutUserInput, RatingHistoryUncheckedCreateWithoutUserInput> | RatingHistoryCreateWithoutUserInput[] | RatingHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingHistoryCreateOrConnectWithoutUserInput | RatingHistoryCreateOrConnectWithoutUserInput[]
    upsert?: RatingHistoryUpsertWithWhereUniqueWithoutUserInput | RatingHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingHistoryCreateManyUserInputEnvelope
    set?: RatingHistoryWhereUniqueInput | RatingHistoryWhereUniqueInput[]
    disconnect?: RatingHistoryWhereUniqueInput | RatingHistoryWhereUniqueInput[]
    delete?: RatingHistoryWhereUniqueInput | RatingHistoryWhereUniqueInput[]
    connect?: RatingHistoryWhereUniqueInput | RatingHistoryWhereUniqueInput[]
    update?: RatingHistoryUpdateWithWhereUniqueWithoutUserInput | RatingHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingHistoryUpdateManyWithWhereWithoutUserInput | RatingHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingHistoryScalarWhereInput | RatingHistoryScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer1Input | MatchUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer1Input | MatchUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer1Input | MatchUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer2Input | MatchUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer2Input | MatchUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer2Input | MatchUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerInput | MatchUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerInput | MatchUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerInput | MatchUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<NotificationCreateWithoutReceiverInput, NotificationUncheckedCreateWithoutReceiverInput> | NotificationCreateWithoutReceiverInput[] | NotificationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReceiverInput | NotificationCreateOrConnectWithoutReceiverInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutReceiverInput | NotificationUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: NotificationCreateManyReceiverInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutReceiverInput | NotificationUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutReceiverInput | NotificationUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type MatchInviteUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MatchInviteCreateWithoutSenderInput, MatchInviteUncheckedCreateWithoutSenderInput> | MatchInviteCreateWithoutSenderInput[] | MatchInviteUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MatchInviteCreateOrConnectWithoutSenderInput | MatchInviteCreateOrConnectWithoutSenderInput[]
    upsert?: MatchInviteUpsertWithWhereUniqueWithoutSenderInput | MatchInviteUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MatchInviteCreateManySenderInputEnvelope
    set?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    disconnect?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    delete?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    connect?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    update?: MatchInviteUpdateWithWhereUniqueWithoutSenderInput | MatchInviteUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MatchInviteUpdateManyWithWhereWithoutSenderInput | MatchInviteUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MatchInviteScalarWhereInput | MatchInviteScalarWhereInput[]
  }

  export type MatchInviteUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MatchInviteCreateWithoutReceiverInput, MatchInviteUncheckedCreateWithoutReceiverInput> | MatchInviteCreateWithoutReceiverInput[] | MatchInviteUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MatchInviteCreateOrConnectWithoutReceiverInput | MatchInviteCreateOrConnectWithoutReceiverInput[]
    upsert?: MatchInviteUpsertWithWhereUniqueWithoutReceiverInput | MatchInviteUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MatchInviteCreateManyReceiverInputEnvelope
    set?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    disconnect?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    delete?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    connect?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    update?: MatchInviteUpdateWithWhereUniqueWithoutReceiverInput | MatchInviteUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MatchInviteUpdateManyWithWhereWithoutReceiverInput | MatchInviteUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MatchInviteScalarWhereInput | MatchInviteScalarWhereInput[]
  }

  export type ExecutionHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExecutionHistoryCreateWithoutUserInput, ExecutionHistoryUncheckedCreateWithoutUserInput> | ExecutionHistoryCreateWithoutUserInput[] | ExecutionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutUserInput | ExecutionHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ExecutionHistoryUpsertWithWhereUniqueWithoutUserInput | ExecutionHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExecutionHistoryCreateManyUserInputEnvelope
    set?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    disconnect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    delete?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    update?: ExecutionHistoryUpdateWithWhereUniqueWithoutUserInput | ExecutionHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExecutionHistoryUpdateManyWithWhereWithoutUserInput | ExecutionHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExecutionHistoryScalarWhereInput | ExecutionHistoryScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput | ChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type PlayerProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput> | PlayerProfileCreateWithoutUserInput[] | PlayerProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutUserInput | PlayerProfileCreateOrConnectWithoutUserInput[]
    upsert?: PlayerProfileUpsertWithWhereUniqueWithoutUserInput | PlayerProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlayerProfileCreateManyUserInputEnvelope
    set?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    disconnect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    delete?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    connect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    update?: PlayerProfileUpdateWithWhereUniqueWithoutUserInput | PlayerProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlayerProfileUpdateManyWithWhereWithoutUserInput | PlayerProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlayerProfileScalarWhereInput | PlayerProfileScalarWhereInput[]
  }

  export type RatingHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingHistoryCreateWithoutUserInput, RatingHistoryUncheckedCreateWithoutUserInput> | RatingHistoryCreateWithoutUserInput[] | RatingHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingHistoryCreateOrConnectWithoutUserInput | RatingHistoryCreateOrConnectWithoutUserInput[]
    upsert?: RatingHistoryUpsertWithWhereUniqueWithoutUserInput | RatingHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingHistoryCreateManyUserInputEnvelope
    set?: RatingHistoryWhereUniqueInput | RatingHistoryWhereUniqueInput[]
    disconnect?: RatingHistoryWhereUniqueInput | RatingHistoryWhereUniqueInput[]
    delete?: RatingHistoryWhereUniqueInput | RatingHistoryWhereUniqueInput[]
    connect?: RatingHistoryWhereUniqueInput | RatingHistoryWhereUniqueInput[]
    update?: RatingHistoryUpdateWithWhereUniqueWithoutUserInput | RatingHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingHistoryUpdateManyWithWhereWithoutUserInput | RatingHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingHistoryScalarWhereInput | RatingHistoryScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer1Input | MatchUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer1Input | MatchUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer1Input | MatchUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer2Input | MatchUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer2Input | MatchUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer2Input | MatchUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerInput | MatchUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerInput | MatchUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerInput | MatchUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<NotificationCreateWithoutReceiverInput, NotificationUncheckedCreateWithoutReceiverInput> | NotificationCreateWithoutReceiverInput[] | NotificationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReceiverInput | NotificationCreateOrConnectWithoutReceiverInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutReceiverInput | NotificationUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: NotificationCreateManyReceiverInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutReceiverInput | NotificationUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutReceiverInput | NotificationUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type MatchInviteUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MatchInviteCreateWithoutSenderInput, MatchInviteUncheckedCreateWithoutSenderInput> | MatchInviteCreateWithoutSenderInput[] | MatchInviteUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MatchInviteCreateOrConnectWithoutSenderInput | MatchInviteCreateOrConnectWithoutSenderInput[]
    upsert?: MatchInviteUpsertWithWhereUniqueWithoutSenderInput | MatchInviteUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MatchInviteCreateManySenderInputEnvelope
    set?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    disconnect?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    delete?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    connect?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    update?: MatchInviteUpdateWithWhereUniqueWithoutSenderInput | MatchInviteUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MatchInviteUpdateManyWithWhereWithoutSenderInput | MatchInviteUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MatchInviteScalarWhereInput | MatchInviteScalarWhereInput[]
  }

  export type MatchInviteUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MatchInviteCreateWithoutReceiverInput, MatchInviteUncheckedCreateWithoutReceiverInput> | MatchInviteCreateWithoutReceiverInput[] | MatchInviteUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MatchInviteCreateOrConnectWithoutReceiverInput | MatchInviteCreateOrConnectWithoutReceiverInput[]
    upsert?: MatchInviteUpsertWithWhereUniqueWithoutReceiverInput | MatchInviteUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MatchInviteCreateManyReceiverInputEnvelope
    set?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    disconnect?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    delete?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    connect?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    update?: MatchInviteUpdateWithWhereUniqueWithoutReceiverInput | MatchInviteUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MatchInviteUpdateManyWithWhereWithoutReceiverInput | MatchInviteUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MatchInviteScalarWhereInput | MatchInviteScalarWhereInput[]
  }

  export type ExecutionHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExecutionHistoryCreateWithoutUserInput, ExecutionHistoryUncheckedCreateWithoutUserInput> | ExecutionHistoryCreateWithoutUserInput[] | ExecutionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutUserInput | ExecutionHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ExecutionHistoryUpsertWithWhereUniqueWithoutUserInput | ExecutionHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExecutionHistoryCreateManyUserInputEnvelope
    set?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    disconnect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    delete?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    update?: ExecutionHistoryUpdateWithWhereUniqueWithoutUserInput | ExecutionHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExecutionHistoryUpdateManyWithWhereWithoutUserInput | ExecutionHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExecutionHistoryScalarWhereInput | ExecutionHistoryScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput | ChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPlayerProfileInput = {
    create?: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerProfileInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPlayerStatusFieldUpdateOperationsInput = {
    set?: $Enums.PlayerStatus
  }

  export type UserUpdateOneRequiredWithoutPlayerProfileNestedInput = {
    create?: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerProfileInput
    upsert?: UserUpsertWithoutPlayerProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlayerProfileInput, UserUpdateWithoutPlayerProfileInput>, UserUncheckedUpdateWithoutPlayerProfileInput>
  }

  export type UserCreateNestedOneWithoutRatingHistoryInput = {
    create?: XOR<UserCreateWithoutRatingHistoryInput, UserUncheckedCreateWithoutRatingHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRatingReasonFieldUpdateOperationsInput = {
    set?: $Enums.RatingReason
  }

  export type UserUpdateOneRequiredWithoutRatingHistoryNestedInput = {
    create?: XOR<UserCreateWithoutRatingHistoryInput, UserUncheckedCreateWithoutRatingHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingHistoryInput
    upsert?: UserUpsertWithoutRatingHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingHistoryInput, UserUpdateWithoutRatingHistoryInput>, UserUncheckedUpdateWithoutRatingHistoryInput>
  }

  export type UserCreateNestedOneWithoutMatchesAsPlayer1Input = {
    create?: XOR<UserCreateWithoutMatchesAsPlayer1Input, UserUncheckedCreateWithoutMatchesAsPlayer1Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsPlayer1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchesAsPlayer2Input = {
    create?: XOR<UserCreateWithoutMatchesAsPlayer2Input, UserUncheckedCreateWithoutMatchesAsPlayer2Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsPlayer2Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchesAsWinnerInput = {
    create?: XOR<UserCreateWithoutMatchesAsWinnerInput, UserUncheckedCreateWithoutMatchesAsWinnerInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsWinnerInput
    connect?: UserWhereUniqueInput
  }

  export type MatchInviteCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchInviteCreateWithoutMatchInput, MatchInviteUncheckedCreateWithoutMatchInput> | MatchInviteCreateWithoutMatchInput[] | MatchInviteUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchInviteCreateOrConnectWithoutMatchInput | MatchInviteCreateOrConnectWithoutMatchInput[]
    createMany?: MatchInviteCreateManyMatchInputEnvelope
    connect?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
  }

  export type ExecutionHistoryCreateNestedManyWithoutMatchInput = {
    create?: XOR<ExecutionHistoryCreateWithoutMatchInput, ExecutionHistoryUncheckedCreateWithoutMatchInput> | ExecutionHistoryCreateWithoutMatchInput[] | ExecutionHistoryUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutMatchInput | ExecutionHistoryCreateOrConnectWithoutMatchInput[]
    createMany?: ExecutionHistoryCreateManyMatchInputEnvelope
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutMatchInput = {
    create?: XOR<ChatMessageCreateWithoutMatchInput, ChatMessageUncheckedCreateWithoutMatchInput> | ChatMessageCreateWithoutMatchInput[] | ChatMessageUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutMatchInput | ChatMessageCreateOrConnectWithoutMatchInput[]
    createMany?: ChatMessageCreateManyMatchInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type MatchInviteUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchInviteCreateWithoutMatchInput, MatchInviteUncheckedCreateWithoutMatchInput> | MatchInviteCreateWithoutMatchInput[] | MatchInviteUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchInviteCreateOrConnectWithoutMatchInput | MatchInviteCreateOrConnectWithoutMatchInput[]
    createMany?: MatchInviteCreateManyMatchInputEnvelope
    connect?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
  }

  export type ExecutionHistoryUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<ExecutionHistoryCreateWithoutMatchInput, ExecutionHistoryUncheckedCreateWithoutMatchInput> | ExecutionHistoryCreateWithoutMatchInput[] | ExecutionHistoryUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutMatchInput | ExecutionHistoryCreateOrConnectWithoutMatchInput[]
    createMany?: ExecutionHistoryCreateManyMatchInputEnvelope
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<ChatMessageCreateWithoutMatchInput, ChatMessageUncheckedCreateWithoutMatchInput> | ChatMessageCreateWithoutMatchInput[] | ChatMessageUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutMatchInput | ChatMessageCreateOrConnectWithoutMatchInput[]
    createMany?: ChatMessageCreateManyMatchInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type EnumMatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.MatchStatus
  }

  export type UserUpdateOneRequiredWithoutMatchesAsPlayer1NestedInput = {
    create?: XOR<UserCreateWithoutMatchesAsPlayer1Input, UserUncheckedCreateWithoutMatchesAsPlayer1Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsPlayer1Input
    upsert?: UserUpsertWithoutMatchesAsPlayer1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesAsPlayer1Input, UserUpdateWithoutMatchesAsPlayer1Input>, UserUncheckedUpdateWithoutMatchesAsPlayer1Input>
  }

  export type UserUpdateOneRequiredWithoutMatchesAsPlayer2NestedInput = {
    create?: XOR<UserCreateWithoutMatchesAsPlayer2Input, UserUncheckedCreateWithoutMatchesAsPlayer2Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsPlayer2Input
    upsert?: UserUpsertWithoutMatchesAsPlayer2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesAsPlayer2Input, UserUpdateWithoutMatchesAsPlayer2Input>, UserUncheckedUpdateWithoutMatchesAsPlayer2Input>
  }

  export type UserUpdateOneRequiredWithoutMatchesAsWinnerNestedInput = {
    create?: XOR<UserCreateWithoutMatchesAsWinnerInput, UserUncheckedCreateWithoutMatchesAsWinnerInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsWinnerInput
    upsert?: UserUpsertWithoutMatchesAsWinnerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesAsWinnerInput, UserUpdateWithoutMatchesAsWinnerInput>, UserUncheckedUpdateWithoutMatchesAsWinnerInput>
  }

  export type MatchInviteUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchInviteCreateWithoutMatchInput, MatchInviteUncheckedCreateWithoutMatchInput> | MatchInviteCreateWithoutMatchInput[] | MatchInviteUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchInviteCreateOrConnectWithoutMatchInput | MatchInviteCreateOrConnectWithoutMatchInput[]
    upsert?: MatchInviteUpsertWithWhereUniqueWithoutMatchInput | MatchInviteUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchInviteCreateManyMatchInputEnvelope
    set?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    disconnect?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    delete?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    connect?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    update?: MatchInviteUpdateWithWhereUniqueWithoutMatchInput | MatchInviteUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchInviteUpdateManyWithWhereWithoutMatchInput | MatchInviteUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchInviteScalarWhereInput | MatchInviteScalarWhereInput[]
  }

  export type ExecutionHistoryUpdateManyWithoutMatchNestedInput = {
    create?: XOR<ExecutionHistoryCreateWithoutMatchInput, ExecutionHistoryUncheckedCreateWithoutMatchInput> | ExecutionHistoryCreateWithoutMatchInput[] | ExecutionHistoryUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutMatchInput | ExecutionHistoryCreateOrConnectWithoutMatchInput[]
    upsert?: ExecutionHistoryUpsertWithWhereUniqueWithoutMatchInput | ExecutionHistoryUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: ExecutionHistoryCreateManyMatchInputEnvelope
    set?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    disconnect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    delete?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    update?: ExecutionHistoryUpdateWithWhereUniqueWithoutMatchInput | ExecutionHistoryUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: ExecutionHistoryUpdateManyWithWhereWithoutMatchInput | ExecutionHistoryUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: ExecutionHistoryScalarWhereInput | ExecutionHistoryScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutMatchNestedInput = {
    create?: XOR<ChatMessageCreateWithoutMatchInput, ChatMessageUncheckedCreateWithoutMatchInput> | ChatMessageCreateWithoutMatchInput[] | ChatMessageUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutMatchInput | ChatMessageCreateOrConnectWithoutMatchInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutMatchInput | ChatMessageUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: ChatMessageCreateManyMatchInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutMatchInput | ChatMessageUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutMatchInput | ChatMessageUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type MatchInviteUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchInviteCreateWithoutMatchInput, MatchInviteUncheckedCreateWithoutMatchInput> | MatchInviteCreateWithoutMatchInput[] | MatchInviteUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchInviteCreateOrConnectWithoutMatchInput | MatchInviteCreateOrConnectWithoutMatchInput[]
    upsert?: MatchInviteUpsertWithWhereUniqueWithoutMatchInput | MatchInviteUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchInviteCreateManyMatchInputEnvelope
    set?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    disconnect?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    delete?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    connect?: MatchInviteWhereUniqueInput | MatchInviteWhereUniqueInput[]
    update?: MatchInviteUpdateWithWhereUniqueWithoutMatchInput | MatchInviteUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchInviteUpdateManyWithWhereWithoutMatchInput | MatchInviteUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchInviteScalarWhereInput | MatchInviteScalarWhereInput[]
  }

  export type ExecutionHistoryUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<ExecutionHistoryCreateWithoutMatchInput, ExecutionHistoryUncheckedCreateWithoutMatchInput> | ExecutionHistoryCreateWithoutMatchInput[] | ExecutionHistoryUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutMatchInput | ExecutionHistoryCreateOrConnectWithoutMatchInput[]
    upsert?: ExecutionHistoryUpsertWithWhereUniqueWithoutMatchInput | ExecutionHistoryUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: ExecutionHistoryCreateManyMatchInputEnvelope
    set?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    disconnect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    delete?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    update?: ExecutionHistoryUpdateWithWhereUniqueWithoutMatchInput | ExecutionHistoryUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: ExecutionHistoryUpdateManyWithWhereWithoutMatchInput | ExecutionHistoryUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: ExecutionHistoryScalarWhereInput | ExecutionHistoryScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<ChatMessageCreateWithoutMatchInput, ChatMessageUncheckedCreateWithoutMatchInput> | ChatMessageCreateWithoutMatchInput[] | ChatMessageUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutMatchInput | ChatMessageCreateOrConnectWithoutMatchInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutMatchInput | ChatMessageUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: ChatMessageCreateManyMatchInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutMatchInput | ChatMessageUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutMatchInput | ChatMessageUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificationInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    upsert?: UserUpsertWithoutNotificationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationInput, UserUpdateWithoutNotificationInput>, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type MatchCreateNestedOneWithoutMatchInviteInput = {
    create?: XOR<MatchCreateWithoutMatchInviteInput, MatchUncheckedCreateWithoutMatchInviteInput>
    connectOrCreate?: MatchCreateOrConnectWithoutMatchInviteInput
    connect?: MatchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentInvitesInput = {
    create?: XOR<UserCreateWithoutSentInvitesInput, UserUncheckedCreateWithoutSentInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentInvitesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedInvitesInput = {
    create?: XOR<UserCreateWithoutReceivedInvitesInput, UserUncheckedCreateWithoutReceivedInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedInvitesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMatchInviteStatusFieldUpdateOperationsInput = {
    set?: $Enums.MatchInviteStatus
  }

  export type MatchUpdateOneRequiredWithoutMatchInviteNestedInput = {
    create?: XOR<MatchCreateWithoutMatchInviteInput, MatchUncheckedCreateWithoutMatchInviteInput>
    connectOrCreate?: MatchCreateOrConnectWithoutMatchInviteInput
    upsert?: MatchUpsertWithoutMatchInviteInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutMatchInviteInput, MatchUpdateWithoutMatchInviteInput>, MatchUncheckedUpdateWithoutMatchInviteInput>
  }

  export type UserUpdateOneRequiredWithoutSentInvitesNestedInput = {
    create?: XOR<UserCreateWithoutSentInvitesInput, UserUncheckedCreateWithoutSentInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentInvitesInput
    upsert?: UserUpsertWithoutSentInvitesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentInvitesInput, UserUpdateWithoutSentInvitesInput>, UserUncheckedUpdateWithoutSentInvitesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedInvitesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedInvitesInput, UserUncheckedCreateWithoutReceivedInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedInvitesInput
    upsert?: UserUpsertWithoutReceivedInvitesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedInvitesInput, UserUpdateWithoutReceivedInvitesInput>, UserUncheckedUpdateWithoutReceivedInvitesInput>
  }

  export type UserCreateNestedOneWithoutExecutionHistoryInput = {
    create?: XOR<UserCreateWithoutExecutionHistoryInput, UserUncheckedCreateWithoutExecutionHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutExecutionHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type MatchCreateNestedOneWithoutExecutionHistoryInput = {
    create?: XOR<MatchCreateWithoutExecutionHistoryInput, MatchUncheckedCreateWithoutExecutionHistoryInput>
    connectOrCreate?: MatchCreateOrConnectWithoutExecutionHistoryInput
    connect?: MatchWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutExecutionHistoryNestedInput = {
    create?: XOR<UserCreateWithoutExecutionHistoryInput, UserUncheckedCreateWithoutExecutionHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutExecutionHistoryInput
    upsert?: UserUpsertWithoutExecutionHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExecutionHistoryInput, UserUpdateWithoutExecutionHistoryInput>, UserUncheckedUpdateWithoutExecutionHistoryInput>
  }

  export type MatchUpdateOneRequiredWithoutExecutionHistoryNestedInput = {
    create?: XOR<MatchCreateWithoutExecutionHistoryInput, MatchUncheckedCreateWithoutExecutionHistoryInput>
    connectOrCreate?: MatchCreateOrConnectWithoutExecutionHistoryInput
    upsert?: MatchUpsertWithoutExecutionHistoryInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutExecutionHistoryInput, MatchUpdateWithoutExecutionHistoryInput>, MatchUncheckedUpdateWithoutExecutionHistoryInput>
  }

  export type MatchCreateNestedOneWithoutChatMessageInput = {
    create?: XOR<MatchCreateWithoutChatMessageInput, MatchUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: MatchCreateOrConnectWithoutChatMessageInput
    connect?: MatchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatMessageInput = {
    create?: XOR<UserCreateWithoutChatMessageInput, UserUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessageInput
    connect?: UserWhereUniqueInput
  }

  export type MatchUpdateOneRequiredWithoutChatMessageNestedInput = {
    create?: XOR<MatchCreateWithoutChatMessageInput, MatchUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: MatchCreateOrConnectWithoutChatMessageInput
    upsert?: MatchUpsertWithoutChatMessageInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutChatMessageInput, MatchUpdateWithoutChatMessageInput>, MatchUncheckedUpdateWithoutChatMessageInput>
  }

  export type UserUpdateOneRequiredWithoutChatMessageNestedInput = {
    create?: XOR<UserCreateWithoutChatMessageInput, UserUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessageInput
    upsert?: UserUpsertWithoutChatMessageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMessageInput, UserUpdateWithoutChatMessageInput>, UserUncheckedUpdateWithoutChatMessageInput>
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

  export type NestedEnumPlayerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerStatus | EnumPlayerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerStatus[] | ListEnumPlayerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerStatus[] | ListEnumPlayerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerStatusFilter<$PrismaModel> | $Enums.PlayerStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPlayerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerStatus | EnumPlayerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlayerStatus[] | ListEnumPlayerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlayerStatus[] | ListEnumPlayerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlayerStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlayerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlayerStatusFilter<$PrismaModel>
    _max?: NestedEnumPlayerStatusFilter<$PrismaModel>
  }

  export type NestedEnumRatingReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.RatingReason | EnumRatingReasonFieldRefInput<$PrismaModel>
    in?: $Enums.RatingReason[] | ListEnumRatingReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.RatingReason[] | ListEnumRatingReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumRatingReasonFilter<$PrismaModel> | $Enums.RatingReason
  }

  export type NestedEnumRatingReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RatingReason | EnumRatingReasonFieldRefInput<$PrismaModel>
    in?: $Enums.RatingReason[] | ListEnumRatingReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.RatingReason[] | ListEnumRatingReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumRatingReasonWithAggregatesFilter<$PrismaModel> | $Enums.RatingReason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRatingReasonFilter<$PrismaModel>
    _max?: NestedEnumRatingReasonFilter<$PrismaModel>
  }

  export type NestedEnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
  }

  export type NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMatchInviteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchInviteStatus | EnumMatchInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchInviteStatus[] | ListEnumMatchInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchInviteStatus[] | ListEnumMatchInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchInviteStatusFilter<$PrismaModel> | $Enums.MatchInviteStatus
  }

  export type NestedEnumMatchInviteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchInviteStatus | EnumMatchInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchInviteStatus[] | ListEnumMatchInviteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchInviteStatus[] | ListEnumMatchInviteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchInviteStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchInviteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchInviteStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchInviteStatusFilter<$PrismaModel>
  }

  export type PlayerProfileCreateWithoutUserInput = {
    id?: string
    rank: number
    rating: number
    region: string
    status?: $Enums.PlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerProfileUncheckedCreateWithoutUserInput = {
    id?: string
    rank: number
    rating: number
    region: string
    status?: $Enums.PlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerProfileCreateOrConnectWithoutUserInput = {
    where: PlayerProfileWhereUniqueInput
    create: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
  }

  export type PlayerProfileCreateManyUserInputEnvelope = {
    data: PlayerProfileCreateManyUserInput | PlayerProfileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RatingHistoryCreateWithoutUserInput = {
    id?: string
    old_rating: number
    new_rating: number
    reason: $Enums.RatingReason
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    old_rating: number
    new_rating: number
    reason: $Enums.RatingReason
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingHistoryCreateOrConnectWithoutUserInput = {
    where: RatingHistoryWhereUniqueInput
    create: XOR<RatingHistoryCreateWithoutUserInput, RatingHistoryUncheckedCreateWithoutUserInput>
  }

  export type RatingHistoryCreateManyUserInputEnvelope = {
    data: RatingHistoryCreateManyUserInput | RatingHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutPlayer1Input = {
    id?: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    player2: UserCreateNestedOneWithoutMatchesAsPlayer2Input
    winner: UserCreateNestedOneWithoutMatchesAsWinnerInput
    MatchInvite?: MatchInviteCreateNestedManyWithoutMatchInput
    ExecutionHistory?: ExecutionHistoryCreateNestedManyWithoutMatchInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutPlayer1Input = {
    id?: string
    player2_id: string
    winner_id: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    MatchInvite?: MatchInviteUncheckedCreateNestedManyWithoutMatchInput
    ExecutionHistory?: ExecutionHistoryUncheckedCreateNestedManyWithoutMatchInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutPlayer1Input = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input>
  }

  export type MatchCreateManyPlayer1InputEnvelope = {
    data: MatchCreateManyPlayer1Input | MatchCreateManyPlayer1Input[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutPlayer2Input = {
    id?: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    player1: UserCreateNestedOneWithoutMatchesAsPlayer1Input
    winner: UserCreateNestedOneWithoutMatchesAsWinnerInput
    MatchInvite?: MatchInviteCreateNestedManyWithoutMatchInput
    ExecutionHistory?: ExecutionHistoryCreateNestedManyWithoutMatchInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutPlayer2Input = {
    id?: string
    player1_id: string
    winner_id: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    MatchInvite?: MatchInviteUncheckedCreateNestedManyWithoutMatchInput
    ExecutionHistory?: ExecutionHistoryUncheckedCreateNestedManyWithoutMatchInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutPlayer2Input = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input>
  }

  export type MatchCreateManyPlayer2InputEnvelope = {
    data: MatchCreateManyPlayer2Input | MatchCreateManyPlayer2Input[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutWinnerInput = {
    id?: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    player1: UserCreateNestedOneWithoutMatchesAsPlayer1Input
    player2: UserCreateNestedOneWithoutMatchesAsPlayer2Input
    MatchInvite?: MatchInviteCreateNestedManyWithoutMatchInput
    ExecutionHistory?: ExecutionHistoryCreateNestedManyWithoutMatchInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutWinnerInput = {
    id?: string
    player1_id: string
    player2_id: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    MatchInvite?: MatchInviteUncheckedCreateNestedManyWithoutMatchInput
    ExecutionHistory?: ExecutionHistoryUncheckedCreateNestedManyWithoutMatchInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput>
  }

  export type MatchCreateManyWinnerInputEnvelope = {
    data: MatchCreateManyWinnerInput | MatchCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutReceiverInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutReceiverInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutReceiverInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutReceiverInput, NotificationUncheckedCreateWithoutReceiverInput>
  }

  export type NotificationCreateManyReceiverInputEnvelope = {
    data: NotificationCreateManyReceiverInput | NotificationCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type MatchInviteCreateWithoutSenderInput = {
    id?: string
    status?: $Enums.MatchInviteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    match: MatchCreateNestedOneWithoutMatchInviteInput
    receiver: UserCreateNestedOneWithoutReceivedInvitesInput
  }

  export type MatchInviteUncheckedCreateWithoutSenderInput = {
    id?: string
    match_id: string
    receiver_id: string
    status?: $Enums.MatchInviteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchInviteCreateOrConnectWithoutSenderInput = {
    where: MatchInviteWhereUniqueInput
    create: XOR<MatchInviteCreateWithoutSenderInput, MatchInviteUncheckedCreateWithoutSenderInput>
  }

  export type MatchInviteCreateManySenderInputEnvelope = {
    data: MatchInviteCreateManySenderInput | MatchInviteCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MatchInviteCreateWithoutReceiverInput = {
    id?: string
    status?: $Enums.MatchInviteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    match: MatchCreateNestedOneWithoutMatchInviteInput
    sender: UserCreateNestedOneWithoutSentInvitesInput
  }

  export type MatchInviteUncheckedCreateWithoutReceiverInput = {
    id?: string
    match_id: string
    sender_id: string
    status?: $Enums.MatchInviteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchInviteCreateOrConnectWithoutReceiverInput = {
    where: MatchInviteWhereUniqueInput
    create: XOR<MatchInviteCreateWithoutReceiverInput, MatchInviteUncheckedCreateWithoutReceiverInput>
  }

  export type MatchInviteCreateManyReceiverInputEnvelope = {
    data: MatchInviteCreateManyReceiverInput | MatchInviteCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type ExecutionHistoryCreateWithoutUserInput = {
    id?: string
    code: string
    output: string
    createdAt?: Date | string
    updatedAt?: Date | string
    match: MatchCreateNestedOneWithoutExecutionHistoryInput
  }

  export type ExecutionHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    match_id: string
    code: string
    output: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExecutionHistoryCreateOrConnectWithoutUserInput = {
    where: ExecutionHistoryWhereUniqueInput
    create: XOR<ExecutionHistoryCreateWithoutUserInput, ExecutionHistoryUncheckedCreateWithoutUserInput>
  }

  export type ExecutionHistoryCreateManyUserInputEnvelope = {
    data: ExecutionHistoryCreateManyUserInput | ExecutionHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutSenderInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    match: MatchCreateNestedOneWithoutChatMessageInput
  }

  export type ChatMessageUncheckedCreateWithoutSenderInput = {
    id?: string
    match_id: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type ChatMessageCreateManySenderInputEnvelope = {
    data: ChatMessageCreateManySenderInput | ChatMessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type PlayerProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: PlayerProfileWhereUniqueInput
    update: XOR<PlayerProfileUpdateWithoutUserInput, PlayerProfileUncheckedUpdateWithoutUserInput>
    create: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
  }

  export type PlayerProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: PlayerProfileWhereUniqueInput
    data: XOR<PlayerProfileUpdateWithoutUserInput, PlayerProfileUncheckedUpdateWithoutUserInput>
  }

  export type PlayerProfileUpdateManyWithWhereWithoutUserInput = {
    where: PlayerProfileScalarWhereInput
    data: XOR<PlayerProfileUpdateManyMutationInput, PlayerProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type PlayerProfileScalarWhereInput = {
    AND?: PlayerProfileScalarWhereInput | PlayerProfileScalarWhereInput[]
    OR?: PlayerProfileScalarWhereInput[]
    NOT?: PlayerProfileScalarWhereInput | PlayerProfileScalarWhereInput[]
    id?: StringFilter<"PlayerProfile"> | string
    user_id?: StringFilter<"PlayerProfile"> | string
    rank?: IntFilter<"PlayerProfile"> | number
    rating?: IntFilter<"PlayerProfile"> | number
    region?: StringFilter<"PlayerProfile"> | string
    status?: EnumPlayerStatusFilter<"PlayerProfile"> | $Enums.PlayerStatus
    createdAt?: DateTimeFilter<"PlayerProfile"> | Date | string
    updatedAt?: DateTimeFilter<"PlayerProfile"> | Date | string
  }

  export type RatingHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: RatingHistoryWhereUniqueInput
    update: XOR<RatingHistoryUpdateWithoutUserInput, RatingHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<RatingHistoryCreateWithoutUserInput, RatingHistoryUncheckedCreateWithoutUserInput>
  }

  export type RatingHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: RatingHistoryWhereUniqueInput
    data: XOR<RatingHistoryUpdateWithoutUserInput, RatingHistoryUncheckedUpdateWithoutUserInput>
  }

  export type RatingHistoryUpdateManyWithWhereWithoutUserInput = {
    where: RatingHistoryScalarWhereInput
    data: XOR<RatingHistoryUpdateManyMutationInput, RatingHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type RatingHistoryScalarWhereInput = {
    AND?: RatingHistoryScalarWhereInput | RatingHistoryScalarWhereInput[]
    OR?: RatingHistoryScalarWhereInput[]
    NOT?: RatingHistoryScalarWhereInput | RatingHistoryScalarWhereInput[]
    id?: StringFilter<"RatingHistory"> | string
    user_id?: StringFilter<"RatingHistory"> | string
    old_rating?: IntFilter<"RatingHistory"> | number
    new_rating?: IntFilter<"RatingHistory"> | number
    reason?: EnumRatingReasonFilter<"RatingHistory"> | $Enums.RatingReason
    createdAt?: DateTimeFilter<"RatingHistory"> | Date | string
    updatedAt?: DateTimeFilter<"RatingHistory"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutPlayer1Input = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutPlayer1Input, MatchUncheckedUpdateWithoutPlayer1Input>
    create: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input>
  }

  export type MatchUpdateWithWhereUniqueWithoutPlayer1Input = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutPlayer1Input, MatchUncheckedUpdateWithoutPlayer1Input>
  }

  export type MatchUpdateManyWithWhereWithoutPlayer1Input = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutPlayer1Input>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    player1_id?: StringFilter<"Match"> | string
    player2_id?: StringFilter<"Match"> | string
    winner_id?: StringFilter<"Match"> | string
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutPlayer2Input = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutPlayer2Input, MatchUncheckedUpdateWithoutPlayer2Input>
    create: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input>
  }

  export type MatchUpdateWithWhereUniqueWithoutPlayer2Input = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutPlayer2Input, MatchUncheckedUpdateWithoutPlayer2Input>
  }

  export type MatchUpdateManyWithWhereWithoutPlayer2Input = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutPlayer2Input>
  }

  export type MatchUpsertWithWhereUniqueWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutWinnerInput, MatchUncheckedUpdateWithoutWinnerInput>
    create: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutWinnerInput, MatchUncheckedUpdateWithoutWinnerInput>
  }

  export type MatchUpdateManyWithWhereWithoutWinnerInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutWinnerInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutReceiverInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutReceiverInput, NotificationUncheckedUpdateWithoutReceiverInput>
    create: XOR<NotificationCreateWithoutReceiverInput, NotificationUncheckedCreateWithoutReceiverInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutReceiverInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutReceiverInput, NotificationUncheckedUpdateWithoutReceiverInput>
  }

  export type NotificationUpdateManyWithWhereWithoutReceiverInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutReceiverInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    receiver_id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type MatchInviteUpsertWithWhereUniqueWithoutSenderInput = {
    where: MatchInviteWhereUniqueInput
    update: XOR<MatchInviteUpdateWithoutSenderInput, MatchInviteUncheckedUpdateWithoutSenderInput>
    create: XOR<MatchInviteCreateWithoutSenderInput, MatchInviteUncheckedCreateWithoutSenderInput>
  }

  export type MatchInviteUpdateWithWhereUniqueWithoutSenderInput = {
    where: MatchInviteWhereUniqueInput
    data: XOR<MatchInviteUpdateWithoutSenderInput, MatchInviteUncheckedUpdateWithoutSenderInput>
  }

  export type MatchInviteUpdateManyWithWhereWithoutSenderInput = {
    where: MatchInviteScalarWhereInput
    data: XOR<MatchInviteUpdateManyMutationInput, MatchInviteUncheckedUpdateManyWithoutSenderInput>
  }

  export type MatchInviteScalarWhereInput = {
    AND?: MatchInviteScalarWhereInput | MatchInviteScalarWhereInput[]
    OR?: MatchInviteScalarWhereInput[]
    NOT?: MatchInviteScalarWhereInput | MatchInviteScalarWhereInput[]
    id?: StringFilter<"MatchInvite"> | string
    match_id?: StringFilter<"MatchInvite"> | string
    sender_id?: StringFilter<"MatchInvite"> | string
    receiver_id?: StringFilter<"MatchInvite"> | string
    status?: EnumMatchInviteStatusFilter<"MatchInvite"> | $Enums.MatchInviteStatus
    createdAt?: DateTimeFilter<"MatchInvite"> | Date | string
    updatedAt?: DateTimeFilter<"MatchInvite"> | Date | string
  }

  export type MatchInviteUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MatchInviteWhereUniqueInput
    update: XOR<MatchInviteUpdateWithoutReceiverInput, MatchInviteUncheckedUpdateWithoutReceiverInput>
    create: XOR<MatchInviteCreateWithoutReceiverInput, MatchInviteUncheckedCreateWithoutReceiverInput>
  }

  export type MatchInviteUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MatchInviteWhereUniqueInput
    data: XOR<MatchInviteUpdateWithoutReceiverInput, MatchInviteUncheckedUpdateWithoutReceiverInput>
  }

  export type MatchInviteUpdateManyWithWhereWithoutReceiverInput = {
    where: MatchInviteScalarWhereInput
    data: XOR<MatchInviteUpdateManyMutationInput, MatchInviteUncheckedUpdateManyWithoutReceiverInput>
  }

  export type ExecutionHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: ExecutionHistoryWhereUniqueInput
    update: XOR<ExecutionHistoryUpdateWithoutUserInput, ExecutionHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ExecutionHistoryCreateWithoutUserInput, ExecutionHistoryUncheckedCreateWithoutUserInput>
  }

  export type ExecutionHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: ExecutionHistoryWhereUniqueInput
    data: XOR<ExecutionHistoryUpdateWithoutUserInput, ExecutionHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ExecutionHistoryUpdateManyWithWhereWithoutUserInput = {
    where: ExecutionHistoryScalarWhereInput
    data: XOR<ExecutionHistoryUpdateManyMutationInput, ExecutionHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type ExecutionHistoryScalarWhereInput = {
    AND?: ExecutionHistoryScalarWhereInput | ExecutionHistoryScalarWhereInput[]
    OR?: ExecutionHistoryScalarWhereInput[]
    NOT?: ExecutionHistoryScalarWhereInput | ExecutionHistoryScalarWhereInput[]
    id?: StringFilter<"ExecutionHistory"> | string
    user_id?: StringFilter<"ExecutionHistory"> | string
    match_id?: StringFilter<"ExecutionHistory"> | string
    code?: StringFilter<"ExecutionHistory"> | string
    output?: StringFilter<"ExecutionHistory"> | string
    createdAt?: DateTimeFilter<"ExecutionHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ExecutionHistory"> | Date | string
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutSenderInput, ChatMessageUncheckedUpdateWithoutSenderInput>
    create: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutSenderInput, ChatMessageUncheckedUpdateWithoutSenderInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutSenderInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    match_id?: StringFilter<"ChatMessage"> | string
    sender_id?: StringFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type UserCreateWithoutPlayerProfileInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    RatingHistory?: RatingHistoryCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsWinner?: MatchCreateNestedManyWithoutWinnerInput
    Notification?: NotificationCreateNestedManyWithoutReceiverInput
    sentInvites?: MatchInviteCreateNestedManyWithoutSenderInput
    receivedInvites?: MatchInviteCreateNestedManyWithoutReceiverInput
    ExecutionHistory?: ExecutionHistoryCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutPlayerProfileInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    RatingHistory?: RatingHistoryUncheckedCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsWinner?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    sentInvites?: MatchInviteUncheckedCreateNestedManyWithoutSenderInput
    receivedInvites?: MatchInviteUncheckedCreateNestedManyWithoutReceiverInput
    ExecutionHistory?: ExecutionHistoryUncheckedCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutPlayerProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
  }

  export type UserUpsertWithoutPlayerProfileInput = {
    update: XOR<UserUpdateWithoutPlayerProfileInput, UserUncheckedUpdateWithoutPlayerProfileInput>
    create: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlayerProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlayerProfileInput, UserUncheckedUpdateWithoutPlayerProfileInput>
  }

  export type UserUpdateWithoutPlayerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RatingHistory?: RatingHistoryUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsWinner?: MatchUpdateManyWithoutWinnerNestedInput
    Notification?: NotificationUpdateManyWithoutReceiverNestedInput
    sentInvites?: MatchInviteUpdateManyWithoutSenderNestedInput
    receivedInvites?: MatchInviteUpdateManyWithoutReceiverNestedInput
    ExecutionHistory?: ExecutionHistoryUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutPlayerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RatingHistory?: RatingHistoryUncheckedUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsWinner?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    sentInvites?: MatchInviteUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvites?: MatchInviteUncheckedUpdateManyWithoutReceiverNestedInput
    ExecutionHistory?: ExecutionHistoryUncheckedUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateWithoutRatingHistoryInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsWinner?: MatchCreateNestedManyWithoutWinnerInput
    Notification?: NotificationCreateNestedManyWithoutReceiverInput
    sentInvites?: MatchInviteCreateNestedManyWithoutSenderInput
    receivedInvites?: MatchInviteCreateNestedManyWithoutReceiverInput
    ExecutionHistory?: ExecutionHistoryCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutRatingHistoryInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileUncheckedCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsWinner?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    sentInvites?: MatchInviteUncheckedCreateNestedManyWithoutSenderInput
    receivedInvites?: MatchInviteUncheckedCreateNestedManyWithoutReceiverInput
    ExecutionHistory?: ExecutionHistoryUncheckedCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutRatingHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingHistoryInput, UserUncheckedCreateWithoutRatingHistoryInput>
  }

  export type UserUpsertWithoutRatingHistoryInput = {
    update: XOR<UserUpdateWithoutRatingHistoryInput, UserUncheckedUpdateWithoutRatingHistoryInput>
    create: XOR<UserCreateWithoutRatingHistoryInput, UserUncheckedCreateWithoutRatingHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingHistoryInput, UserUncheckedUpdateWithoutRatingHistoryInput>
  }

  export type UserUpdateWithoutRatingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsWinner?: MatchUpdateManyWithoutWinnerNestedInput
    Notification?: NotificationUpdateManyWithoutReceiverNestedInput
    sentInvites?: MatchInviteUpdateManyWithoutSenderNestedInput
    receivedInvites?: MatchInviteUpdateManyWithoutReceiverNestedInput
    ExecutionHistory?: ExecutionHistoryUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUncheckedUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsWinner?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    sentInvites?: MatchInviteUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvites?: MatchInviteUncheckedUpdateManyWithoutReceiverNestedInput
    ExecutionHistory?: ExecutionHistoryUncheckedUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateWithoutMatchesAsPlayer1Input = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileCreateNestedManyWithoutUserInput
    RatingHistory?: RatingHistoryCreateNestedManyWithoutUserInput
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsWinner?: MatchCreateNestedManyWithoutWinnerInput
    Notification?: NotificationCreateNestedManyWithoutReceiverInput
    sentInvites?: MatchInviteCreateNestedManyWithoutSenderInput
    receivedInvites?: MatchInviteCreateNestedManyWithoutReceiverInput
    ExecutionHistory?: ExecutionHistoryCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutMatchesAsPlayer1Input = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileUncheckedCreateNestedManyWithoutUserInput
    RatingHistory?: RatingHistoryUncheckedCreateNestedManyWithoutUserInput
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsWinner?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    sentInvites?: MatchInviteUncheckedCreateNestedManyWithoutSenderInput
    receivedInvites?: MatchInviteUncheckedCreateNestedManyWithoutReceiverInput
    ExecutionHistory?: ExecutionHistoryUncheckedCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutMatchesAsPlayer1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesAsPlayer1Input, UserUncheckedCreateWithoutMatchesAsPlayer1Input>
  }

  export type UserCreateWithoutMatchesAsPlayer2Input = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileCreateNestedManyWithoutUserInput
    RatingHistory?: RatingHistoryCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsWinner?: MatchCreateNestedManyWithoutWinnerInput
    Notification?: NotificationCreateNestedManyWithoutReceiverInput
    sentInvites?: MatchInviteCreateNestedManyWithoutSenderInput
    receivedInvites?: MatchInviteCreateNestedManyWithoutReceiverInput
    ExecutionHistory?: ExecutionHistoryCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutMatchesAsPlayer2Input = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileUncheckedCreateNestedManyWithoutUserInput
    RatingHistory?: RatingHistoryUncheckedCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsWinner?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    sentInvites?: MatchInviteUncheckedCreateNestedManyWithoutSenderInput
    receivedInvites?: MatchInviteUncheckedCreateNestedManyWithoutReceiverInput
    ExecutionHistory?: ExecutionHistoryUncheckedCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutMatchesAsPlayer2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesAsPlayer2Input, UserUncheckedCreateWithoutMatchesAsPlayer2Input>
  }

  export type UserCreateWithoutMatchesAsWinnerInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileCreateNestedManyWithoutUserInput
    RatingHistory?: RatingHistoryCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    Notification?: NotificationCreateNestedManyWithoutReceiverInput
    sentInvites?: MatchInviteCreateNestedManyWithoutSenderInput
    receivedInvites?: MatchInviteCreateNestedManyWithoutReceiverInput
    ExecutionHistory?: ExecutionHistoryCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutMatchesAsWinnerInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileUncheckedCreateNestedManyWithoutUserInput
    RatingHistory?: RatingHistoryUncheckedCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    Notification?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    sentInvites?: MatchInviteUncheckedCreateNestedManyWithoutSenderInput
    receivedInvites?: MatchInviteUncheckedCreateNestedManyWithoutReceiverInput
    ExecutionHistory?: ExecutionHistoryUncheckedCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutMatchesAsWinnerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesAsWinnerInput, UserUncheckedCreateWithoutMatchesAsWinnerInput>
  }

  export type MatchInviteCreateWithoutMatchInput = {
    id?: string
    status?: $Enums.MatchInviteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentInvitesInput
    receiver: UserCreateNestedOneWithoutReceivedInvitesInput
  }

  export type MatchInviteUncheckedCreateWithoutMatchInput = {
    id?: string
    sender_id: string
    receiver_id: string
    status?: $Enums.MatchInviteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchInviteCreateOrConnectWithoutMatchInput = {
    where: MatchInviteWhereUniqueInput
    create: XOR<MatchInviteCreateWithoutMatchInput, MatchInviteUncheckedCreateWithoutMatchInput>
  }

  export type MatchInviteCreateManyMatchInputEnvelope = {
    data: MatchInviteCreateManyMatchInput | MatchInviteCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type ExecutionHistoryCreateWithoutMatchInput = {
    id?: string
    code: string
    output: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutExecutionHistoryInput
  }

  export type ExecutionHistoryUncheckedCreateWithoutMatchInput = {
    id?: string
    user_id: string
    code: string
    output: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExecutionHistoryCreateOrConnectWithoutMatchInput = {
    where: ExecutionHistoryWhereUniqueInput
    create: XOR<ExecutionHistoryCreateWithoutMatchInput, ExecutionHistoryUncheckedCreateWithoutMatchInput>
  }

  export type ExecutionHistoryCreateManyMatchInputEnvelope = {
    data: ExecutionHistoryCreateManyMatchInput | ExecutionHistoryCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutMatchInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutChatMessageInput
  }

  export type ChatMessageUncheckedCreateWithoutMatchInput = {
    id?: string
    sender_id: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutMatchInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutMatchInput, ChatMessageUncheckedCreateWithoutMatchInput>
  }

  export type ChatMessageCreateManyMatchInputEnvelope = {
    data: ChatMessageCreateManyMatchInput | ChatMessageCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMatchesAsPlayer1Input = {
    update: XOR<UserUpdateWithoutMatchesAsPlayer1Input, UserUncheckedUpdateWithoutMatchesAsPlayer1Input>
    create: XOR<UserCreateWithoutMatchesAsPlayer1Input, UserUncheckedCreateWithoutMatchesAsPlayer1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesAsPlayer1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesAsPlayer1Input, UserUncheckedUpdateWithoutMatchesAsPlayer1Input>
  }

  export type UserUpdateWithoutMatchesAsPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUpdateManyWithoutUserNestedInput
    RatingHistory?: RatingHistoryUpdateManyWithoutUserNestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsWinner?: MatchUpdateManyWithoutWinnerNestedInput
    Notification?: NotificationUpdateManyWithoutReceiverNestedInput
    sentInvites?: MatchInviteUpdateManyWithoutSenderNestedInput
    receivedInvites?: MatchInviteUpdateManyWithoutReceiverNestedInput
    ExecutionHistory?: ExecutionHistoryUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesAsPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUncheckedUpdateManyWithoutUserNestedInput
    RatingHistory?: RatingHistoryUncheckedUpdateManyWithoutUserNestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsWinner?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    sentInvites?: MatchInviteUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvites?: MatchInviteUncheckedUpdateManyWithoutReceiverNestedInput
    ExecutionHistory?: ExecutionHistoryUncheckedUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserUpsertWithoutMatchesAsPlayer2Input = {
    update: XOR<UserUpdateWithoutMatchesAsPlayer2Input, UserUncheckedUpdateWithoutMatchesAsPlayer2Input>
    create: XOR<UserCreateWithoutMatchesAsPlayer2Input, UserUncheckedCreateWithoutMatchesAsPlayer2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesAsPlayer2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesAsPlayer2Input, UserUncheckedUpdateWithoutMatchesAsPlayer2Input>
  }

  export type UserUpdateWithoutMatchesAsPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUpdateManyWithoutUserNestedInput
    RatingHistory?: RatingHistoryUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsWinner?: MatchUpdateManyWithoutWinnerNestedInput
    Notification?: NotificationUpdateManyWithoutReceiverNestedInput
    sentInvites?: MatchInviteUpdateManyWithoutSenderNestedInput
    receivedInvites?: MatchInviteUpdateManyWithoutReceiverNestedInput
    ExecutionHistory?: ExecutionHistoryUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesAsPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUncheckedUpdateManyWithoutUserNestedInput
    RatingHistory?: RatingHistoryUncheckedUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsWinner?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    sentInvites?: MatchInviteUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvites?: MatchInviteUncheckedUpdateManyWithoutReceiverNestedInput
    ExecutionHistory?: ExecutionHistoryUncheckedUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserUpsertWithoutMatchesAsWinnerInput = {
    update: XOR<UserUpdateWithoutMatchesAsWinnerInput, UserUncheckedUpdateWithoutMatchesAsWinnerInput>
    create: XOR<UserCreateWithoutMatchesAsWinnerInput, UserUncheckedCreateWithoutMatchesAsWinnerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesAsWinnerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesAsWinnerInput, UserUncheckedUpdateWithoutMatchesAsWinnerInput>
  }

  export type UserUpdateWithoutMatchesAsWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUpdateManyWithoutUserNestedInput
    RatingHistory?: RatingHistoryUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    Notification?: NotificationUpdateManyWithoutReceiverNestedInput
    sentInvites?: MatchInviteUpdateManyWithoutSenderNestedInput
    receivedInvites?: MatchInviteUpdateManyWithoutReceiverNestedInput
    ExecutionHistory?: ExecutionHistoryUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesAsWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUncheckedUpdateManyWithoutUserNestedInput
    RatingHistory?: RatingHistoryUncheckedUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    sentInvites?: MatchInviteUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvites?: MatchInviteUncheckedUpdateManyWithoutReceiverNestedInput
    ExecutionHistory?: ExecutionHistoryUncheckedUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type MatchInviteUpsertWithWhereUniqueWithoutMatchInput = {
    where: MatchInviteWhereUniqueInput
    update: XOR<MatchInviteUpdateWithoutMatchInput, MatchInviteUncheckedUpdateWithoutMatchInput>
    create: XOR<MatchInviteCreateWithoutMatchInput, MatchInviteUncheckedCreateWithoutMatchInput>
  }

  export type MatchInviteUpdateWithWhereUniqueWithoutMatchInput = {
    where: MatchInviteWhereUniqueInput
    data: XOR<MatchInviteUpdateWithoutMatchInput, MatchInviteUncheckedUpdateWithoutMatchInput>
  }

  export type MatchInviteUpdateManyWithWhereWithoutMatchInput = {
    where: MatchInviteScalarWhereInput
    data: XOR<MatchInviteUpdateManyMutationInput, MatchInviteUncheckedUpdateManyWithoutMatchInput>
  }

  export type ExecutionHistoryUpsertWithWhereUniqueWithoutMatchInput = {
    where: ExecutionHistoryWhereUniqueInput
    update: XOR<ExecutionHistoryUpdateWithoutMatchInput, ExecutionHistoryUncheckedUpdateWithoutMatchInput>
    create: XOR<ExecutionHistoryCreateWithoutMatchInput, ExecutionHistoryUncheckedCreateWithoutMatchInput>
  }

  export type ExecutionHistoryUpdateWithWhereUniqueWithoutMatchInput = {
    where: ExecutionHistoryWhereUniqueInput
    data: XOR<ExecutionHistoryUpdateWithoutMatchInput, ExecutionHistoryUncheckedUpdateWithoutMatchInput>
  }

  export type ExecutionHistoryUpdateManyWithWhereWithoutMatchInput = {
    where: ExecutionHistoryScalarWhereInput
    data: XOR<ExecutionHistoryUpdateManyMutationInput, ExecutionHistoryUncheckedUpdateManyWithoutMatchInput>
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutMatchInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutMatchInput, ChatMessageUncheckedUpdateWithoutMatchInput>
    create: XOR<ChatMessageCreateWithoutMatchInput, ChatMessageUncheckedCreateWithoutMatchInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutMatchInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutMatchInput, ChatMessageUncheckedUpdateWithoutMatchInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutMatchInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutMatchInput>
  }

  export type UserCreateWithoutNotificationInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileCreateNestedManyWithoutUserInput
    RatingHistory?: RatingHistoryCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsWinner?: MatchCreateNestedManyWithoutWinnerInput
    sentInvites?: MatchInviteCreateNestedManyWithoutSenderInput
    receivedInvites?: MatchInviteCreateNestedManyWithoutReceiverInput
    ExecutionHistory?: ExecutionHistoryCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutNotificationInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileUncheckedCreateNestedManyWithoutUserInput
    RatingHistory?: RatingHistoryUncheckedCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsWinner?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    sentInvites?: MatchInviteUncheckedCreateNestedManyWithoutSenderInput
    receivedInvites?: MatchInviteUncheckedCreateNestedManyWithoutReceiverInput
    ExecutionHistory?: ExecutionHistoryUncheckedCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutNotificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
  }

  export type UserUpsertWithoutNotificationInput = {
    update: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type UserUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUpdateManyWithoutUserNestedInput
    RatingHistory?: RatingHistoryUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsWinner?: MatchUpdateManyWithoutWinnerNestedInput
    sentInvites?: MatchInviteUpdateManyWithoutSenderNestedInput
    receivedInvites?: MatchInviteUpdateManyWithoutReceiverNestedInput
    ExecutionHistory?: ExecutionHistoryUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUncheckedUpdateManyWithoutUserNestedInput
    RatingHistory?: RatingHistoryUncheckedUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsWinner?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    sentInvites?: MatchInviteUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvites?: MatchInviteUncheckedUpdateManyWithoutReceiverNestedInput
    ExecutionHistory?: ExecutionHistoryUncheckedUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type MatchCreateWithoutMatchInviteInput = {
    id?: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    player1: UserCreateNestedOneWithoutMatchesAsPlayer1Input
    player2: UserCreateNestedOneWithoutMatchesAsPlayer2Input
    winner: UserCreateNestedOneWithoutMatchesAsWinnerInput
    ExecutionHistory?: ExecutionHistoryCreateNestedManyWithoutMatchInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutMatchInviteInput = {
    id?: string
    player1_id: string
    player2_id: string
    winner_id: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    ExecutionHistory?: ExecutionHistoryUncheckedCreateNestedManyWithoutMatchInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutMatchInviteInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutMatchInviteInput, MatchUncheckedCreateWithoutMatchInviteInput>
  }

  export type UserCreateWithoutSentInvitesInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileCreateNestedManyWithoutUserInput
    RatingHistory?: RatingHistoryCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsWinner?: MatchCreateNestedManyWithoutWinnerInput
    Notification?: NotificationCreateNestedManyWithoutReceiverInput
    receivedInvites?: MatchInviteCreateNestedManyWithoutReceiverInput
    ExecutionHistory?: ExecutionHistoryCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutSentInvitesInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileUncheckedCreateNestedManyWithoutUserInput
    RatingHistory?: RatingHistoryUncheckedCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsWinner?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    receivedInvites?: MatchInviteUncheckedCreateNestedManyWithoutReceiverInput
    ExecutionHistory?: ExecutionHistoryUncheckedCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutSentInvitesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentInvitesInput, UserUncheckedCreateWithoutSentInvitesInput>
  }

  export type UserCreateWithoutReceivedInvitesInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileCreateNestedManyWithoutUserInput
    RatingHistory?: RatingHistoryCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsWinner?: MatchCreateNestedManyWithoutWinnerInput
    Notification?: NotificationCreateNestedManyWithoutReceiverInput
    sentInvites?: MatchInviteCreateNestedManyWithoutSenderInput
    ExecutionHistory?: ExecutionHistoryCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceivedInvitesInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileUncheckedCreateNestedManyWithoutUserInput
    RatingHistory?: RatingHistoryUncheckedCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsWinner?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    sentInvites?: MatchInviteUncheckedCreateNestedManyWithoutSenderInput
    ExecutionHistory?: ExecutionHistoryUncheckedCreateNestedManyWithoutUserInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceivedInvitesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedInvitesInput, UserUncheckedCreateWithoutReceivedInvitesInput>
  }

  export type MatchUpsertWithoutMatchInviteInput = {
    update: XOR<MatchUpdateWithoutMatchInviteInput, MatchUncheckedUpdateWithoutMatchInviteInput>
    create: XOR<MatchCreateWithoutMatchInviteInput, MatchUncheckedCreateWithoutMatchInviteInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutMatchInviteInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutMatchInviteInput, MatchUncheckedUpdateWithoutMatchInviteInput>
  }

  export type MatchUpdateWithoutMatchInviteInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutMatchesAsPlayer1NestedInput
    player2?: UserUpdateOneRequiredWithoutMatchesAsPlayer2NestedInput
    winner?: UserUpdateOneRequiredWithoutMatchesAsWinnerNestedInput
    ExecutionHistory?: ExecutionHistoryUpdateManyWithoutMatchNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutMatchInviteInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1_id?: StringFieldUpdateOperationsInput | string
    player2_id?: StringFieldUpdateOperationsInput | string
    winner_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ExecutionHistory?: ExecutionHistoryUncheckedUpdateManyWithoutMatchNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type UserUpsertWithoutSentInvitesInput = {
    update: XOR<UserUpdateWithoutSentInvitesInput, UserUncheckedUpdateWithoutSentInvitesInput>
    create: XOR<UserCreateWithoutSentInvitesInput, UserUncheckedCreateWithoutSentInvitesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentInvitesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentInvitesInput, UserUncheckedUpdateWithoutSentInvitesInput>
  }

  export type UserUpdateWithoutSentInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUpdateManyWithoutUserNestedInput
    RatingHistory?: RatingHistoryUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsWinner?: MatchUpdateManyWithoutWinnerNestedInput
    Notification?: NotificationUpdateManyWithoutReceiverNestedInput
    receivedInvites?: MatchInviteUpdateManyWithoutReceiverNestedInput
    ExecutionHistory?: ExecutionHistoryUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutSentInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUncheckedUpdateManyWithoutUserNestedInput
    RatingHistory?: RatingHistoryUncheckedUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsWinner?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    receivedInvites?: MatchInviteUncheckedUpdateManyWithoutReceiverNestedInput
    ExecutionHistory?: ExecutionHistoryUncheckedUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserUpsertWithoutReceivedInvitesInput = {
    update: XOR<UserUpdateWithoutReceivedInvitesInput, UserUncheckedUpdateWithoutReceivedInvitesInput>
    create: XOR<UserCreateWithoutReceivedInvitesInput, UserUncheckedCreateWithoutReceivedInvitesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedInvitesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedInvitesInput, UserUncheckedUpdateWithoutReceivedInvitesInput>
  }

  export type UserUpdateWithoutReceivedInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUpdateManyWithoutUserNestedInput
    RatingHistory?: RatingHistoryUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsWinner?: MatchUpdateManyWithoutWinnerNestedInput
    Notification?: NotificationUpdateManyWithoutReceiverNestedInput
    sentInvites?: MatchInviteUpdateManyWithoutSenderNestedInput
    ExecutionHistory?: ExecutionHistoryUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUncheckedUpdateManyWithoutUserNestedInput
    RatingHistory?: RatingHistoryUncheckedUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsWinner?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    sentInvites?: MatchInviteUncheckedUpdateManyWithoutSenderNestedInput
    ExecutionHistory?: ExecutionHistoryUncheckedUpdateManyWithoutUserNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateWithoutExecutionHistoryInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileCreateNestedManyWithoutUserInput
    RatingHistory?: RatingHistoryCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsWinner?: MatchCreateNestedManyWithoutWinnerInput
    Notification?: NotificationCreateNestedManyWithoutReceiverInput
    sentInvites?: MatchInviteCreateNestedManyWithoutSenderInput
    receivedInvites?: MatchInviteCreateNestedManyWithoutReceiverInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutExecutionHistoryInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileUncheckedCreateNestedManyWithoutUserInput
    RatingHistory?: RatingHistoryUncheckedCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsWinner?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    sentInvites?: MatchInviteUncheckedCreateNestedManyWithoutSenderInput
    receivedInvites?: MatchInviteUncheckedCreateNestedManyWithoutReceiverInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutExecutionHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExecutionHistoryInput, UserUncheckedCreateWithoutExecutionHistoryInput>
  }

  export type MatchCreateWithoutExecutionHistoryInput = {
    id?: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    player1: UserCreateNestedOneWithoutMatchesAsPlayer1Input
    player2: UserCreateNestedOneWithoutMatchesAsPlayer2Input
    winner: UserCreateNestedOneWithoutMatchesAsWinnerInput
    MatchInvite?: MatchInviteCreateNestedManyWithoutMatchInput
    ChatMessage?: ChatMessageCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutExecutionHistoryInput = {
    id?: string
    player1_id: string
    player2_id: string
    winner_id: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    MatchInvite?: MatchInviteUncheckedCreateNestedManyWithoutMatchInput
    ChatMessage?: ChatMessageUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutExecutionHistoryInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutExecutionHistoryInput, MatchUncheckedCreateWithoutExecutionHistoryInput>
  }

  export type UserUpsertWithoutExecutionHistoryInput = {
    update: XOR<UserUpdateWithoutExecutionHistoryInput, UserUncheckedUpdateWithoutExecutionHistoryInput>
    create: XOR<UserCreateWithoutExecutionHistoryInput, UserUncheckedCreateWithoutExecutionHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExecutionHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExecutionHistoryInput, UserUncheckedUpdateWithoutExecutionHistoryInput>
  }

  export type UserUpdateWithoutExecutionHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUpdateManyWithoutUserNestedInput
    RatingHistory?: RatingHistoryUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsWinner?: MatchUpdateManyWithoutWinnerNestedInput
    Notification?: NotificationUpdateManyWithoutReceiverNestedInput
    sentInvites?: MatchInviteUpdateManyWithoutSenderNestedInput
    receivedInvites?: MatchInviteUpdateManyWithoutReceiverNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutExecutionHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUncheckedUpdateManyWithoutUserNestedInput
    RatingHistory?: RatingHistoryUncheckedUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsWinner?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    sentInvites?: MatchInviteUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvites?: MatchInviteUncheckedUpdateManyWithoutReceiverNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type MatchUpsertWithoutExecutionHistoryInput = {
    update: XOR<MatchUpdateWithoutExecutionHistoryInput, MatchUncheckedUpdateWithoutExecutionHistoryInput>
    create: XOR<MatchCreateWithoutExecutionHistoryInput, MatchUncheckedCreateWithoutExecutionHistoryInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutExecutionHistoryInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutExecutionHistoryInput, MatchUncheckedUpdateWithoutExecutionHistoryInput>
  }

  export type MatchUpdateWithoutExecutionHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutMatchesAsPlayer1NestedInput
    player2?: UserUpdateOneRequiredWithoutMatchesAsPlayer2NestedInput
    winner?: UserUpdateOneRequiredWithoutMatchesAsWinnerNestedInput
    MatchInvite?: MatchInviteUpdateManyWithoutMatchNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutExecutionHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1_id?: StringFieldUpdateOperationsInput | string
    player2_id?: StringFieldUpdateOperationsInput | string
    winner_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MatchInvite?: MatchInviteUncheckedUpdateManyWithoutMatchNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchCreateWithoutChatMessageInput = {
    id?: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    player1: UserCreateNestedOneWithoutMatchesAsPlayer1Input
    player2: UserCreateNestedOneWithoutMatchesAsPlayer2Input
    winner: UserCreateNestedOneWithoutMatchesAsWinnerInput
    MatchInvite?: MatchInviteCreateNestedManyWithoutMatchInput
    ExecutionHistory?: ExecutionHistoryCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutChatMessageInput = {
    id?: string
    player1_id: string
    player2_id: string
    winner_id: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    MatchInvite?: MatchInviteUncheckedCreateNestedManyWithoutMatchInput
    ExecutionHistory?: ExecutionHistoryUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutChatMessageInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutChatMessageInput, MatchUncheckedCreateWithoutChatMessageInput>
  }

  export type UserCreateWithoutChatMessageInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileCreateNestedManyWithoutUserInput
    RatingHistory?: RatingHistoryCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchCreateNestedManyWithoutPlayer2Input
    matchesAsWinner?: MatchCreateNestedManyWithoutWinnerInput
    Notification?: NotificationCreateNestedManyWithoutReceiverInput
    sentInvites?: MatchInviteCreateNestedManyWithoutSenderInput
    receivedInvites?: MatchInviteCreateNestedManyWithoutReceiverInput
    ExecutionHistory?: ExecutionHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatMessageInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PlayerProfile?: PlayerProfileUncheckedCreateNestedManyWithoutUserInput
    RatingHistory?: RatingHistoryUncheckedCreateNestedManyWithoutUserInput
    matchesAsPlayer1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matchesAsPlayer2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    matchesAsWinner?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutReceiverInput
    sentInvites?: MatchInviteUncheckedCreateNestedManyWithoutSenderInput
    receivedInvites?: MatchInviteUncheckedCreateNestedManyWithoutReceiverInput
    ExecutionHistory?: ExecutionHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatMessageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMessageInput, UserUncheckedCreateWithoutChatMessageInput>
  }

  export type MatchUpsertWithoutChatMessageInput = {
    update: XOR<MatchUpdateWithoutChatMessageInput, MatchUncheckedUpdateWithoutChatMessageInput>
    create: XOR<MatchCreateWithoutChatMessageInput, MatchUncheckedCreateWithoutChatMessageInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutChatMessageInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutChatMessageInput, MatchUncheckedUpdateWithoutChatMessageInput>
  }

  export type MatchUpdateWithoutChatMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutMatchesAsPlayer1NestedInput
    player2?: UserUpdateOneRequiredWithoutMatchesAsPlayer2NestedInput
    winner?: UserUpdateOneRequiredWithoutMatchesAsWinnerNestedInput
    MatchInvite?: MatchInviteUpdateManyWithoutMatchNestedInput
    ExecutionHistory?: ExecutionHistoryUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutChatMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1_id?: StringFieldUpdateOperationsInput | string
    player2_id?: StringFieldUpdateOperationsInput | string
    winner_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MatchInvite?: MatchInviteUncheckedUpdateManyWithoutMatchNestedInput
    ExecutionHistory?: ExecutionHistoryUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type UserUpsertWithoutChatMessageInput = {
    update: XOR<UserUpdateWithoutChatMessageInput, UserUncheckedUpdateWithoutChatMessageInput>
    create: XOR<UserCreateWithoutChatMessageInput, UserUncheckedCreateWithoutChatMessageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMessageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMessageInput, UserUncheckedUpdateWithoutChatMessageInput>
  }

  export type UserUpdateWithoutChatMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUpdateManyWithoutUserNestedInput
    RatingHistory?: RatingHistoryUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUpdateManyWithoutPlayer2NestedInput
    matchesAsWinner?: MatchUpdateManyWithoutWinnerNestedInput
    Notification?: NotificationUpdateManyWithoutReceiverNestedInput
    sentInvites?: MatchInviteUpdateManyWithoutSenderNestedInput
    receivedInvites?: MatchInviteUpdateManyWithoutReceiverNestedInput
    ExecutionHistory?: ExecutionHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerProfile?: PlayerProfileUncheckedUpdateManyWithoutUserNestedInput
    RatingHistory?: RatingHistoryUncheckedUpdateManyWithoutUserNestedInput
    matchesAsPlayer1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matchesAsPlayer2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    matchesAsWinner?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutReceiverNestedInput
    sentInvites?: MatchInviteUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvites?: MatchInviteUncheckedUpdateManyWithoutReceiverNestedInput
    ExecutionHistory?: ExecutionHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlayerProfileCreateManyUserInput = {
    id?: string
    rank: number
    rating: number
    region: string
    status?: $Enums.PlayerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingHistoryCreateManyUserInput = {
    id?: string
    old_rating: number
    new_rating: number
    reason: $Enums.RatingReason
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyPlayer1Input = {
    id?: string
    player2_id: string
    winner_id: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyPlayer2Input = {
    id?: string
    player1_id: string
    winner_id: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyWinnerInput = {
    id?: string
    player1_id: string
    player2_id: string
    status?: $Enums.MatchStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyReceiverInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchInviteCreateManySenderInput = {
    id?: string
    match_id: string
    receiver_id: string
    status?: $Enums.MatchInviteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchInviteCreateManyReceiverInput = {
    id?: string
    match_id: string
    sender_id: string
    status?: $Enums.MatchInviteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExecutionHistoryCreateManyUserInput = {
    id?: string
    match_id: string
    code: string
    output: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateManySenderInput = {
    id?: string
    match_id: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    status?: EnumPlayerStatusFieldUpdateOperationsInput | $Enums.PlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    status?: EnumPlayerStatusFieldUpdateOperationsInput | $Enums.PlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerProfileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    status?: EnumPlayerStatusFieldUpdateOperationsInput | $Enums.PlayerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    old_rating?: IntFieldUpdateOperationsInput | number
    new_rating?: IntFieldUpdateOperationsInput | number
    reason?: EnumRatingReasonFieldUpdateOperationsInput | $Enums.RatingReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    old_rating?: IntFieldUpdateOperationsInput | number
    new_rating?: IntFieldUpdateOperationsInput | number
    reason?: EnumRatingReasonFieldUpdateOperationsInput | $Enums.RatingReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    old_rating?: IntFieldUpdateOperationsInput | number
    new_rating?: IntFieldUpdateOperationsInput | number
    reason?: EnumRatingReasonFieldUpdateOperationsInput | $Enums.RatingReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player2?: UserUpdateOneRequiredWithoutMatchesAsPlayer2NestedInput
    winner?: UserUpdateOneRequiredWithoutMatchesAsWinnerNestedInput
    MatchInvite?: MatchInviteUpdateManyWithoutMatchNestedInput
    ExecutionHistory?: ExecutionHistoryUpdateManyWithoutMatchNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    player2_id?: StringFieldUpdateOperationsInput | string
    winner_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MatchInvite?: MatchInviteUncheckedUpdateManyWithoutMatchNestedInput
    ExecutionHistory?: ExecutionHistoryUncheckedUpdateManyWithoutMatchNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    player2_id?: StringFieldUpdateOperationsInput | string
    winner_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutMatchesAsPlayer1NestedInput
    winner?: UserUpdateOneRequiredWithoutMatchesAsWinnerNestedInput
    MatchInvite?: MatchInviteUpdateManyWithoutMatchNestedInput
    ExecutionHistory?: ExecutionHistoryUpdateManyWithoutMatchNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    player1_id?: StringFieldUpdateOperationsInput | string
    winner_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MatchInvite?: MatchInviteUncheckedUpdateManyWithoutMatchNestedInput
    ExecutionHistory?: ExecutionHistoryUncheckedUpdateManyWithoutMatchNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    player1_id?: StringFieldUpdateOperationsInput | string
    winner_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutMatchesAsPlayer1NestedInput
    player2?: UserUpdateOneRequiredWithoutMatchesAsPlayer2NestedInput
    MatchInvite?: MatchInviteUpdateManyWithoutMatchNestedInput
    ExecutionHistory?: ExecutionHistoryUpdateManyWithoutMatchNestedInput
    ChatMessage?: ChatMessageUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1_id?: StringFieldUpdateOperationsInput | string
    player2_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MatchInvite?: MatchInviteUncheckedUpdateManyWithoutMatchNestedInput
    ExecutionHistory?: ExecutionHistoryUncheckedUpdateManyWithoutMatchNestedInput
    ChatMessage?: ChatMessageUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1_id?: StringFieldUpdateOperationsInput | string
    player2_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchInviteUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchInviteStatusFieldUpdateOperationsInput | $Enums.MatchInviteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutMatchInviteNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedInvitesNestedInput
  }

  export type MatchInviteUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    match_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchInviteStatusFieldUpdateOperationsInput | $Enums.MatchInviteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchInviteUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    match_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchInviteStatusFieldUpdateOperationsInput | $Enums.MatchInviteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchInviteUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchInviteStatusFieldUpdateOperationsInput | $Enums.MatchInviteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutMatchInviteNestedInput
    sender?: UserUpdateOneRequiredWithoutSentInvitesNestedInput
  }

  export type MatchInviteUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    match_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchInviteStatusFieldUpdateOperationsInput | $Enums.MatchInviteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchInviteUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    match_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchInviteStatusFieldUpdateOperationsInput | $Enums.MatchInviteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutExecutionHistoryNestedInput
  }

  export type ExecutionHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    match_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    match_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutChatMessageNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    match_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    match_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchInviteCreateManyMatchInput = {
    id?: string
    sender_id: string
    receiver_id: string
    status?: $Enums.MatchInviteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExecutionHistoryCreateManyMatchInput = {
    id?: string
    user_id: string
    code: string
    output: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateManyMatchInput = {
    id?: string
    sender_id: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchInviteUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchInviteStatusFieldUpdateOperationsInput | $Enums.MatchInviteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentInvitesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedInvitesNestedInput
  }

  export type MatchInviteUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchInviteStatusFieldUpdateOperationsInput | $Enums.MatchInviteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchInviteUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchInviteStatusFieldUpdateOperationsInput | $Enums.MatchInviteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionHistoryUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExecutionHistoryNestedInput
  }

  export type ExecutionHistoryUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionHistoryUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutChatMessageNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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