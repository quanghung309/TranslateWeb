
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
 * Model DictionaryEntry
 * 
 */
export type DictionaryEntry = $Result.DefaultSelection<Prisma.$DictionaryEntryPayload>
/**
 * Model Definition
 * 
 */
export type Definition = $Result.DefaultSelection<Prisma.$DefinitionPayload>
/**
 * Model TranslationHistory
 * 
 */
export type TranslationHistory = $Result.DefaultSelection<Prisma.$TranslationHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DictionaryEntries
 * const dictionaryEntries = await prisma.dictionaryEntry.findMany()
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
   * // Fetch zero or more DictionaryEntries
   * const dictionaryEntries = await prisma.dictionaryEntry.findMany()
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
   * `prisma.dictionaryEntry`: Exposes CRUD operations for the **DictionaryEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DictionaryEntries
    * const dictionaryEntries = await prisma.dictionaryEntry.findMany()
    * ```
    */
  get dictionaryEntry(): Prisma.DictionaryEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.definition`: Exposes CRUD operations for the **Definition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Definitions
    * const definitions = await prisma.definition.findMany()
    * ```
    */
  get definition(): Prisma.DefinitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.translationHistory`: Exposes CRUD operations for the **TranslationHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TranslationHistories
    * const translationHistories = await prisma.translationHistory.findMany()
    * ```
    */
  get translationHistory(): Prisma.TranslationHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    DictionaryEntry: 'DictionaryEntry',
    Definition: 'Definition',
    TranslationHistory: 'TranslationHistory'
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
      modelProps: "dictionaryEntry" | "definition" | "translationHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DictionaryEntry: {
        payload: Prisma.$DictionaryEntryPayload<ExtArgs>
        fields: Prisma.DictionaryEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DictionaryEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DictionaryEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload>
          }
          findFirst: {
            args: Prisma.DictionaryEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DictionaryEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload>
          }
          findMany: {
            args: Prisma.DictionaryEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload>[]
          }
          create: {
            args: Prisma.DictionaryEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload>
          }
          createMany: {
            args: Prisma.DictionaryEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DictionaryEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload>[]
          }
          delete: {
            args: Prisma.DictionaryEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload>
          }
          update: {
            args: Prisma.DictionaryEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload>
          }
          deleteMany: {
            args: Prisma.DictionaryEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DictionaryEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DictionaryEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload>[]
          }
          upsert: {
            args: Prisma.DictionaryEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryEntryPayload>
          }
          aggregate: {
            args: Prisma.DictionaryEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDictionaryEntry>
          }
          groupBy: {
            args: Prisma.DictionaryEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DictionaryEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DictionaryEntryCountArgs<ExtArgs>
            result: $Utils.Optional<DictionaryEntryCountAggregateOutputType> | number
          }
        }
      }
      Definition: {
        payload: Prisma.$DefinitionPayload<ExtArgs>
        fields: Prisma.DefinitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DefinitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DefinitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload>
          }
          findFirst: {
            args: Prisma.DefinitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DefinitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload>
          }
          findMany: {
            args: Prisma.DefinitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload>[]
          }
          create: {
            args: Prisma.DefinitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload>
          }
          createMany: {
            args: Prisma.DefinitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DefinitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload>[]
          }
          delete: {
            args: Prisma.DefinitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload>
          }
          update: {
            args: Prisma.DefinitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload>
          }
          deleteMany: {
            args: Prisma.DefinitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DefinitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DefinitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload>[]
          }
          upsert: {
            args: Prisma.DefinitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload>
          }
          aggregate: {
            args: Prisma.DefinitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDefinition>
          }
          groupBy: {
            args: Prisma.DefinitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DefinitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DefinitionCountArgs<ExtArgs>
            result: $Utils.Optional<DefinitionCountAggregateOutputType> | number
          }
        }
      }
      TranslationHistory: {
        payload: Prisma.$TranslationHistoryPayload<ExtArgs>
        fields: Prisma.TranslationHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TranslationHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TranslationHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload>
          }
          findFirst: {
            args: Prisma.TranslationHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TranslationHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload>
          }
          findMany: {
            args: Prisma.TranslationHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload>[]
          }
          create: {
            args: Prisma.TranslationHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload>
          }
          createMany: {
            args: Prisma.TranslationHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TranslationHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload>[]
          }
          delete: {
            args: Prisma.TranslationHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload>
          }
          update: {
            args: Prisma.TranslationHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TranslationHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TranslationHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TranslationHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload>[]
          }
          upsert: {
            args: Prisma.TranslationHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload>
          }
          aggregate: {
            args: Prisma.TranslationHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranslationHistory>
          }
          groupBy: {
            args: Prisma.TranslationHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TranslationHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TranslationHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TranslationHistoryCountAggregateOutputType> | number
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
    dictionaryEntry?: DictionaryEntryOmit
    definition?: DefinitionOmit
    translationHistory?: TranslationHistoryOmit
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
   * Count Type DictionaryEntryCountOutputType
   */

  export type DictionaryEntryCountOutputType = {
    definition: number
  }

  export type DictionaryEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    definition?: boolean | DictionaryEntryCountOutputTypeCountDefinitionArgs
  }

  // Custom InputTypes
  /**
   * DictionaryEntryCountOutputType without action
   */
  export type DictionaryEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntryCountOutputType
     */
    select?: DictionaryEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DictionaryEntryCountOutputType without action
   */
  export type DictionaryEntryCountOutputTypeCountDefinitionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DefinitionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DictionaryEntry
   */

  export type AggregateDictionaryEntry = {
    _count: DictionaryEntryCountAggregateOutputType | null
    _min: DictionaryEntryMinAggregateOutputType | null
    _max: DictionaryEntryMaxAggregateOutputType | null
  }

  export type DictionaryEntryMinAggregateOutputType = {
    id: string | null
    word: string | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DictionaryEntryMaxAggregateOutputType = {
    id: string | null
    word: string | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DictionaryEntryCountAggregateOutputType = {
    id: number
    word: number
    language: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DictionaryEntryMinAggregateInputType = {
    id?: true
    word?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DictionaryEntryMaxAggregateInputType = {
    id?: true
    word?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DictionaryEntryCountAggregateInputType = {
    id?: true
    word?: true
    language?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DictionaryEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DictionaryEntry to aggregate.
     */
    where?: DictionaryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryEntries to fetch.
     */
    orderBy?: DictionaryEntryOrderByWithRelationInput | DictionaryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DictionaryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DictionaryEntries
    **/
    _count?: true | DictionaryEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DictionaryEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DictionaryEntryMaxAggregateInputType
  }

  export type GetDictionaryEntryAggregateType<T extends DictionaryEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateDictionaryEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDictionaryEntry[P]>
      : GetScalarType<T[P], AggregateDictionaryEntry[P]>
  }




  export type DictionaryEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictionaryEntryWhereInput
    orderBy?: DictionaryEntryOrderByWithAggregationInput | DictionaryEntryOrderByWithAggregationInput[]
    by: DictionaryEntryScalarFieldEnum[] | DictionaryEntryScalarFieldEnum
    having?: DictionaryEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DictionaryEntryCountAggregateInputType | true
    _min?: DictionaryEntryMinAggregateInputType
    _max?: DictionaryEntryMaxAggregateInputType
  }

  export type DictionaryEntryGroupByOutputType = {
    id: string
    word: string
    language: string
    createdAt: Date
    updatedAt: Date
    _count: DictionaryEntryCountAggregateOutputType | null
    _min: DictionaryEntryMinAggregateOutputType | null
    _max: DictionaryEntryMaxAggregateOutputType | null
  }

  type GetDictionaryEntryGroupByPayload<T extends DictionaryEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DictionaryEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DictionaryEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DictionaryEntryGroupByOutputType[P]>
            : GetScalarType<T[P], DictionaryEntryGroupByOutputType[P]>
        }
      >
    >


  export type DictionaryEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    definition?: boolean | DictionaryEntry$definitionArgs<ExtArgs>
    _count?: boolean | DictionaryEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dictionaryEntry"]>

  export type DictionaryEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dictionaryEntry"]>

  export type DictionaryEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dictionaryEntry"]>

  export type DictionaryEntrySelectScalar = {
    id?: boolean
    word?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DictionaryEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "word" | "language" | "createdAt" | "updatedAt", ExtArgs["result"]["dictionaryEntry"]>
  export type DictionaryEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    definition?: boolean | DictionaryEntry$definitionArgs<ExtArgs>
    _count?: boolean | DictionaryEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DictionaryEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DictionaryEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DictionaryEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DictionaryEntry"
    objects: {
      definition: Prisma.$DefinitionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      word: string
      language: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dictionaryEntry"]>
    composites: {}
  }

  type DictionaryEntryGetPayload<S extends boolean | null | undefined | DictionaryEntryDefaultArgs> = $Result.GetResult<Prisma.$DictionaryEntryPayload, S>

  type DictionaryEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DictionaryEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DictionaryEntryCountAggregateInputType | true
    }

  export interface DictionaryEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DictionaryEntry'], meta: { name: 'DictionaryEntry' } }
    /**
     * Find zero or one DictionaryEntry that matches the filter.
     * @param {DictionaryEntryFindUniqueArgs} args - Arguments to find a DictionaryEntry
     * @example
     * // Get one DictionaryEntry
     * const dictionaryEntry = await prisma.dictionaryEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DictionaryEntryFindUniqueArgs>(args: SelectSubset<T, DictionaryEntryFindUniqueArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DictionaryEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DictionaryEntryFindUniqueOrThrowArgs} args - Arguments to find a DictionaryEntry
     * @example
     * // Get one DictionaryEntry
     * const dictionaryEntry = await prisma.dictionaryEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DictionaryEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, DictionaryEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DictionaryEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryEntryFindFirstArgs} args - Arguments to find a DictionaryEntry
     * @example
     * // Get one DictionaryEntry
     * const dictionaryEntry = await prisma.dictionaryEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DictionaryEntryFindFirstArgs>(args?: SelectSubset<T, DictionaryEntryFindFirstArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DictionaryEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryEntryFindFirstOrThrowArgs} args - Arguments to find a DictionaryEntry
     * @example
     * // Get one DictionaryEntry
     * const dictionaryEntry = await prisma.dictionaryEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DictionaryEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, DictionaryEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DictionaryEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DictionaryEntries
     * const dictionaryEntries = await prisma.dictionaryEntry.findMany()
     * 
     * // Get first 10 DictionaryEntries
     * const dictionaryEntries = await prisma.dictionaryEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dictionaryEntryWithIdOnly = await prisma.dictionaryEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DictionaryEntryFindManyArgs>(args?: SelectSubset<T, DictionaryEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DictionaryEntry.
     * @param {DictionaryEntryCreateArgs} args - Arguments to create a DictionaryEntry.
     * @example
     * // Create one DictionaryEntry
     * const DictionaryEntry = await prisma.dictionaryEntry.create({
     *   data: {
     *     // ... data to create a DictionaryEntry
     *   }
     * })
     * 
     */
    create<T extends DictionaryEntryCreateArgs>(args: SelectSubset<T, DictionaryEntryCreateArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DictionaryEntries.
     * @param {DictionaryEntryCreateManyArgs} args - Arguments to create many DictionaryEntries.
     * @example
     * // Create many DictionaryEntries
     * const dictionaryEntry = await prisma.dictionaryEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DictionaryEntryCreateManyArgs>(args?: SelectSubset<T, DictionaryEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DictionaryEntries and returns the data saved in the database.
     * @param {DictionaryEntryCreateManyAndReturnArgs} args - Arguments to create many DictionaryEntries.
     * @example
     * // Create many DictionaryEntries
     * const dictionaryEntry = await prisma.dictionaryEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DictionaryEntries and only return the `id`
     * const dictionaryEntryWithIdOnly = await prisma.dictionaryEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DictionaryEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, DictionaryEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DictionaryEntry.
     * @param {DictionaryEntryDeleteArgs} args - Arguments to delete one DictionaryEntry.
     * @example
     * // Delete one DictionaryEntry
     * const DictionaryEntry = await prisma.dictionaryEntry.delete({
     *   where: {
     *     // ... filter to delete one DictionaryEntry
     *   }
     * })
     * 
     */
    delete<T extends DictionaryEntryDeleteArgs>(args: SelectSubset<T, DictionaryEntryDeleteArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DictionaryEntry.
     * @param {DictionaryEntryUpdateArgs} args - Arguments to update one DictionaryEntry.
     * @example
     * // Update one DictionaryEntry
     * const dictionaryEntry = await prisma.dictionaryEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DictionaryEntryUpdateArgs>(args: SelectSubset<T, DictionaryEntryUpdateArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DictionaryEntries.
     * @param {DictionaryEntryDeleteManyArgs} args - Arguments to filter DictionaryEntries to delete.
     * @example
     * // Delete a few DictionaryEntries
     * const { count } = await prisma.dictionaryEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DictionaryEntryDeleteManyArgs>(args?: SelectSubset<T, DictionaryEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DictionaryEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DictionaryEntries
     * const dictionaryEntry = await prisma.dictionaryEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DictionaryEntryUpdateManyArgs>(args: SelectSubset<T, DictionaryEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DictionaryEntries and returns the data updated in the database.
     * @param {DictionaryEntryUpdateManyAndReturnArgs} args - Arguments to update many DictionaryEntries.
     * @example
     * // Update many DictionaryEntries
     * const dictionaryEntry = await prisma.dictionaryEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DictionaryEntries and only return the `id`
     * const dictionaryEntryWithIdOnly = await prisma.dictionaryEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends DictionaryEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, DictionaryEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DictionaryEntry.
     * @param {DictionaryEntryUpsertArgs} args - Arguments to update or create a DictionaryEntry.
     * @example
     * // Update or create a DictionaryEntry
     * const dictionaryEntry = await prisma.dictionaryEntry.upsert({
     *   create: {
     *     // ... data to create a DictionaryEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DictionaryEntry we want to update
     *   }
     * })
     */
    upsert<T extends DictionaryEntryUpsertArgs>(args: SelectSubset<T, DictionaryEntryUpsertArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DictionaryEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryEntryCountArgs} args - Arguments to filter DictionaryEntries to count.
     * @example
     * // Count the number of DictionaryEntries
     * const count = await prisma.dictionaryEntry.count({
     *   where: {
     *     // ... the filter for the DictionaryEntries we want to count
     *   }
     * })
    **/
    count<T extends DictionaryEntryCountArgs>(
      args?: Subset<T, DictionaryEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DictionaryEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DictionaryEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DictionaryEntryAggregateArgs>(args: Subset<T, DictionaryEntryAggregateArgs>): Prisma.PrismaPromise<GetDictionaryEntryAggregateType<T>>

    /**
     * Group by DictionaryEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryEntryGroupByArgs} args - Group by arguments.
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
      T extends DictionaryEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DictionaryEntryGroupByArgs['orderBy'] }
        : { orderBy?: DictionaryEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DictionaryEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDictionaryEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DictionaryEntry model
   */
  readonly fields: DictionaryEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DictionaryEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DictionaryEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    definition<T extends DictionaryEntry$definitionArgs<ExtArgs> = {}>(args?: Subset<T, DictionaryEntry$definitionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DictionaryEntry model
   */
  interface DictionaryEntryFieldRefs {
    readonly id: FieldRef<"DictionaryEntry", 'String'>
    readonly word: FieldRef<"DictionaryEntry", 'String'>
    readonly language: FieldRef<"DictionaryEntry", 'String'>
    readonly createdAt: FieldRef<"DictionaryEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"DictionaryEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DictionaryEntry findUnique
   */
  export type DictionaryEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryEntry to fetch.
     */
    where: DictionaryEntryWhereUniqueInput
  }

  /**
   * DictionaryEntry findUniqueOrThrow
   */
  export type DictionaryEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryEntry to fetch.
     */
    where: DictionaryEntryWhereUniqueInput
  }

  /**
   * DictionaryEntry findFirst
   */
  export type DictionaryEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryEntry to fetch.
     */
    where?: DictionaryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryEntries to fetch.
     */
    orderBy?: DictionaryEntryOrderByWithRelationInput | DictionaryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DictionaryEntries.
     */
    cursor?: DictionaryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DictionaryEntries.
     */
    distinct?: DictionaryEntryScalarFieldEnum | DictionaryEntryScalarFieldEnum[]
  }

  /**
   * DictionaryEntry findFirstOrThrow
   */
  export type DictionaryEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryEntry to fetch.
     */
    where?: DictionaryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryEntries to fetch.
     */
    orderBy?: DictionaryEntryOrderByWithRelationInput | DictionaryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DictionaryEntries.
     */
    cursor?: DictionaryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DictionaryEntries.
     */
    distinct?: DictionaryEntryScalarFieldEnum | DictionaryEntryScalarFieldEnum[]
  }

  /**
   * DictionaryEntry findMany
   */
  export type DictionaryEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
    /**
     * Filter, which DictionaryEntries to fetch.
     */
    where?: DictionaryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryEntries to fetch.
     */
    orderBy?: DictionaryEntryOrderByWithRelationInput | DictionaryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DictionaryEntries.
     */
    cursor?: DictionaryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryEntries.
     */
    skip?: number
    distinct?: DictionaryEntryScalarFieldEnum | DictionaryEntryScalarFieldEnum[]
  }

  /**
   * DictionaryEntry create
   */
  export type DictionaryEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a DictionaryEntry.
     */
    data: XOR<DictionaryEntryCreateInput, DictionaryEntryUncheckedCreateInput>
  }

  /**
   * DictionaryEntry createMany
   */
  export type DictionaryEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DictionaryEntries.
     */
    data: DictionaryEntryCreateManyInput | DictionaryEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DictionaryEntry createManyAndReturn
   */
  export type DictionaryEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * The data used to create many DictionaryEntries.
     */
    data: DictionaryEntryCreateManyInput | DictionaryEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DictionaryEntry update
   */
  export type DictionaryEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a DictionaryEntry.
     */
    data: XOR<DictionaryEntryUpdateInput, DictionaryEntryUncheckedUpdateInput>
    /**
     * Choose, which DictionaryEntry to update.
     */
    where: DictionaryEntryWhereUniqueInput
  }

  /**
   * DictionaryEntry updateMany
   */
  export type DictionaryEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DictionaryEntries.
     */
    data: XOR<DictionaryEntryUpdateManyMutationInput, DictionaryEntryUncheckedUpdateManyInput>
    /**
     * Filter which DictionaryEntries to update
     */
    where?: DictionaryEntryWhereInput
    /**
     * Limit how many DictionaryEntries to update.
     */
    limit?: number
  }

  /**
   * DictionaryEntry updateManyAndReturn
   */
  export type DictionaryEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * The data used to update DictionaryEntries.
     */
    data: XOR<DictionaryEntryUpdateManyMutationInput, DictionaryEntryUncheckedUpdateManyInput>
    /**
     * Filter which DictionaryEntries to update
     */
    where?: DictionaryEntryWhereInput
    /**
     * Limit how many DictionaryEntries to update.
     */
    limit?: number
  }

  /**
   * DictionaryEntry upsert
   */
  export type DictionaryEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the DictionaryEntry to update in case it exists.
     */
    where: DictionaryEntryWhereUniqueInput
    /**
     * In case the DictionaryEntry found by the `where` argument doesn't exist, create a new DictionaryEntry with this data.
     */
    create: XOR<DictionaryEntryCreateInput, DictionaryEntryUncheckedCreateInput>
    /**
     * In case the DictionaryEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DictionaryEntryUpdateInput, DictionaryEntryUncheckedUpdateInput>
  }

  /**
   * DictionaryEntry delete
   */
  export type DictionaryEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
    /**
     * Filter which DictionaryEntry to delete.
     */
    where: DictionaryEntryWhereUniqueInput
  }

  /**
   * DictionaryEntry deleteMany
   */
  export type DictionaryEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DictionaryEntries to delete
     */
    where?: DictionaryEntryWhereInput
    /**
     * Limit how many DictionaryEntries to delete.
     */
    limit?: number
  }

  /**
   * DictionaryEntry.definition
   */
  export type DictionaryEntry$definitionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    where?: DefinitionWhereInput
    orderBy?: DefinitionOrderByWithRelationInput | DefinitionOrderByWithRelationInput[]
    cursor?: DefinitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DefinitionScalarFieldEnum | DefinitionScalarFieldEnum[]
  }

  /**
   * DictionaryEntry without action
   */
  export type DictionaryEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryEntry
     */
    select?: DictionaryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryEntry
     */
    omit?: DictionaryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DictionaryEntryInclude<ExtArgs> | null
  }


  /**
   * Model Definition
   */

  export type AggregateDefinition = {
    _count: DefinitionCountAggregateOutputType | null
    _min: DefinitionMinAggregateOutputType | null
    _max: DefinitionMaxAggregateOutputType | null
  }

  export type DefinitionMinAggregateOutputType = {
    id: string | null
    meaning: string | null
    partOfSpeech: string | null
    dictionaryEntryId: string | null
  }

  export type DefinitionMaxAggregateOutputType = {
    id: string | null
    meaning: string | null
    partOfSpeech: string | null
    dictionaryEntryId: string | null
  }

  export type DefinitionCountAggregateOutputType = {
    id: number
    meaning: number
    partOfSpeech: number
    examples: number
    dictionaryEntryId: number
    _all: number
  }


  export type DefinitionMinAggregateInputType = {
    id?: true
    meaning?: true
    partOfSpeech?: true
    dictionaryEntryId?: true
  }

  export type DefinitionMaxAggregateInputType = {
    id?: true
    meaning?: true
    partOfSpeech?: true
    dictionaryEntryId?: true
  }

  export type DefinitionCountAggregateInputType = {
    id?: true
    meaning?: true
    partOfSpeech?: true
    examples?: true
    dictionaryEntryId?: true
    _all?: true
  }

  export type DefinitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Definition to aggregate.
     */
    where?: DefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Definitions to fetch.
     */
    orderBy?: DefinitionOrderByWithRelationInput | DefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Definitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Definitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Definitions
    **/
    _count?: true | DefinitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DefinitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DefinitionMaxAggregateInputType
  }

  export type GetDefinitionAggregateType<T extends DefinitionAggregateArgs> = {
        [P in keyof T & keyof AggregateDefinition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDefinition[P]>
      : GetScalarType<T[P], AggregateDefinition[P]>
  }




  export type DefinitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DefinitionWhereInput
    orderBy?: DefinitionOrderByWithAggregationInput | DefinitionOrderByWithAggregationInput[]
    by: DefinitionScalarFieldEnum[] | DefinitionScalarFieldEnum
    having?: DefinitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DefinitionCountAggregateInputType | true
    _min?: DefinitionMinAggregateInputType
    _max?: DefinitionMaxAggregateInputType
  }

  export type DefinitionGroupByOutputType = {
    id: string
    meaning: string
    partOfSpeech: string
    examples: string[]
    dictionaryEntryId: string
    _count: DefinitionCountAggregateOutputType | null
    _min: DefinitionMinAggregateOutputType | null
    _max: DefinitionMaxAggregateOutputType | null
  }

  type GetDefinitionGroupByPayload<T extends DefinitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DefinitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DefinitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DefinitionGroupByOutputType[P]>
            : GetScalarType<T[P], DefinitionGroupByOutputType[P]>
        }
      >
    >


  export type DefinitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meaning?: boolean
    partOfSpeech?: boolean
    examples?: boolean
    dictionaryEntryId?: boolean
    dictionaryEntry?: boolean | DictionaryEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["definition"]>

  export type DefinitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meaning?: boolean
    partOfSpeech?: boolean
    examples?: boolean
    dictionaryEntryId?: boolean
    dictionaryEntry?: boolean | DictionaryEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["definition"]>

  export type DefinitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meaning?: boolean
    partOfSpeech?: boolean
    examples?: boolean
    dictionaryEntryId?: boolean
    dictionaryEntry?: boolean | DictionaryEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["definition"]>

  export type DefinitionSelectScalar = {
    id?: boolean
    meaning?: boolean
    partOfSpeech?: boolean
    examples?: boolean
    dictionaryEntryId?: boolean
  }

  export type DefinitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meaning" | "partOfSpeech" | "examples" | "dictionaryEntryId", ExtArgs["result"]["definition"]>
  export type DefinitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dictionaryEntry?: boolean | DictionaryEntryDefaultArgs<ExtArgs>
  }
  export type DefinitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dictionaryEntry?: boolean | DictionaryEntryDefaultArgs<ExtArgs>
  }
  export type DefinitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dictionaryEntry?: boolean | DictionaryEntryDefaultArgs<ExtArgs>
  }

  export type $DefinitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Definition"
    objects: {
      dictionaryEntry: Prisma.$DictionaryEntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      meaning: string
      partOfSpeech: string
      examples: string[]
      dictionaryEntryId: string
    }, ExtArgs["result"]["definition"]>
    composites: {}
  }

  type DefinitionGetPayload<S extends boolean | null | undefined | DefinitionDefaultArgs> = $Result.GetResult<Prisma.$DefinitionPayload, S>

  type DefinitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DefinitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DefinitionCountAggregateInputType | true
    }

  export interface DefinitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Definition'], meta: { name: 'Definition' } }
    /**
     * Find zero or one Definition that matches the filter.
     * @param {DefinitionFindUniqueArgs} args - Arguments to find a Definition
     * @example
     * // Get one Definition
     * const definition = await prisma.definition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DefinitionFindUniqueArgs>(args: SelectSubset<T, DefinitionFindUniqueArgs<ExtArgs>>): Prisma__DefinitionClient<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Definition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DefinitionFindUniqueOrThrowArgs} args - Arguments to find a Definition
     * @example
     * // Get one Definition
     * const definition = await prisma.definition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DefinitionFindUniqueOrThrowArgs>(args: SelectSubset<T, DefinitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DefinitionClient<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Definition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefinitionFindFirstArgs} args - Arguments to find a Definition
     * @example
     * // Get one Definition
     * const definition = await prisma.definition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DefinitionFindFirstArgs>(args?: SelectSubset<T, DefinitionFindFirstArgs<ExtArgs>>): Prisma__DefinitionClient<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Definition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefinitionFindFirstOrThrowArgs} args - Arguments to find a Definition
     * @example
     * // Get one Definition
     * const definition = await prisma.definition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DefinitionFindFirstOrThrowArgs>(args?: SelectSubset<T, DefinitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DefinitionClient<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Definitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefinitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Definitions
     * const definitions = await prisma.definition.findMany()
     * 
     * // Get first 10 Definitions
     * const definitions = await prisma.definition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const definitionWithIdOnly = await prisma.definition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DefinitionFindManyArgs>(args?: SelectSubset<T, DefinitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Definition.
     * @param {DefinitionCreateArgs} args - Arguments to create a Definition.
     * @example
     * // Create one Definition
     * const Definition = await prisma.definition.create({
     *   data: {
     *     // ... data to create a Definition
     *   }
     * })
     * 
     */
    create<T extends DefinitionCreateArgs>(args: SelectSubset<T, DefinitionCreateArgs<ExtArgs>>): Prisma__DefinitionClient<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Definitions.
     * @param {DefinitionCreateManyArgs} args - Arguments to create many Definitions.
     * @example
     * // Create many Definitions
     * const definition = await prisma.definition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DefinitionCreateManyArgs>(args?: SelectSubset<T, DefinitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Definitions and returns the data saved in the database.
     * @param {DefinitionCreateManyAndReturnArgs} args - Arguments to create many Definitions.
     * @example
     * // Create many Definitions
     * const definition = await prisma.definition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Definitions and only return the `id`
     * const definitionWithIdOnly = await prisma.definition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DefinitionCreateManyAndReturnArgs>(args?: SelectSubset<T, DefinitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Definition.
     * @param {DefinitionDeleteArgs} args - Arguments to delete one Definition.
     * @example
     * // Delete one Definition
     * const Definition = await prisma.definition.delete({
     *   where: {
     *     // ... filter to delete one Definition
     *   }
     * })
     * 
     */
    delete<T extends DefinitionDeleteArgs>(args: SelectSubset<T, DefinitionDeleteArgs<ExtArgs>>): Prisma__DefinitionClient<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Definition.
     * @param {DefinitionUpdateArgs} args - Arguments to update one Definition.
     * @example
     * // Update one Definition
     * const definition = await prisma.definition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DefinitionUpdateArgs>(args: SelectSubset<T, DefinitionUpdateArgs<ExtArgs>>): Prisma__DefinitionClient<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Definitions.
     * @param {DefinitionDeleteManyArgs} args - Arguments to filter Definitions to delete.
     * @example
     * // Delete a few Definitions
     * const { count } = await prisma.definition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DefinitionDeleteManyArgs>(args?: SelectSubset<T, DefinitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Definitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefinitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Definitions
     * const definition = await prisma.definition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DefinitionUpdateManyArgs>(args: SelectSubset<T, DefinitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Definitions and returns the data updated in the database.
     * @param {DefinitionUpdateManyAndReturnArgs} args - Arguments to update many Definitions.
     * @example
     * // Update many Definitions
     * const definition = await prisma.definition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Definitions and only return the `id`
     * const definitionWithIdOnly = await prisma.definition.updateManyAndReturn({
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
    updateManyAndReturn<T extends DefinitionUpdateManyAndReturnArgs>(args: SelectSubset<T, DefinitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Definition.
     * @param {DefinitionUpsertArgs} args - Arguments to update or create a Definition.
     * @example
     * // Update or create a Definition
     * const definition = await prisma.definition.upsert({
     *   create: {
     *     // ... data to create a Definition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Definition we want to update
     *   }
     * })
     */
    upsert<T extends DefinitionUpsertArgs>(args: SelectSubset<T, DefinitionUpsertArgs<ExtArgs>>): Prisma__DefinitionClient<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Definitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefinitionCountArgs} args - Arguments to filter Definitions to count.
     * @example
     * // Count the number of Definitions
     * const count = await prisma.definition.count({
     *   where: {
     *     // ... the filter for the Definitions we want to count
     *   }
     * })
    **/
    count<T extends DefinitionCountArgs>(
      args?: Subset<T, DefinitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DefinitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Definition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefinitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DefinitionAggregateArgs>(args: Subset<T, DefinitionAggregateArgs>): Prisma.PrismaPromise<GetDefinitionAggregateType<T>>

    /**
     * Group by Definition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefinitionGroupByArgs} args - Group by arguments.
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
      T extends DefinitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DefinitionGroupByArgs['orderBy'] }
        : { orderBy?: DefinitionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DefinitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDefinitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Definition model
   */
  readonly fields: DefinitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Definition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DefinitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dictionaryEntry<T extends DictionaryEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DictionaryEntryDefaultArgs<ExtArgs>>): Prisma__DictionaryEntryClient<$Result.GetResult<Prisma.$DictionaryEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Definition model
   */
  interface DefinitionFieldRefs {
    readonly id: FieldRef<"Definition", 'String'>
    readonly meaning: FieldRef<"Definition", 'String'>
    readonly partOfSpeech: FieldRef<"Definition", 'String'>
    readonly examples: FieldRef<"Definition", 'String[]'>
    readonly dictionaryEntryId: FieldRef<"Definition", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Definition findUnique
   */
  export type DefinitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    /**
     * Filter, which Definition to fetch.
     */
    where: DefinitionWhereUniqueInput
  }

  /**
   * Definition findUniqueOrThrow
   */
  export type DefinitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    /**
     * Filter, which Definition to fetch.
     */
    where: DefinitionWhereUniqueInput
  }

  /**
   * Definition findFirst
   */
  export type DefinitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    /**
     * Filter, which Definition to fetch.
     */
    where?: DefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Definitions to fetch.
     */
    orderBy?: DefinitionOrderByWithRelationInput | DefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Definitions.
     */
    cursor?: DefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Definitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Definitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Definitions.
     */
    distinct?: DefinitionScalarFieldEnum | DefinitionScalarFieldEnum[]
  }

  /**
   * Definition findFirstOrThrow
   */
  export type DefinitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    /**
     * Filter, which Definition to fetch.
     */
    where?: DefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Definitions to fetch.
     */
    orderBy?: DefinitionOrderByWithRelationInput | DefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Definitions.
     */
    cursor?: DefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Definitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Definitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Definitions.
     */
    distinct?: DefinitionScalarFieldEnum | DefinitionScalarFieldEnum[]
  }

  /**
   * Definition findMany
   */
  export type DefinitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    /**
     * Filter, which Definitions to fetch.
     */
    where?: DefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Definitions to fetch.
     */
    orderBy?: DefinitionOrderByWithRelationInput | DefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Definitions.
     */
    cursor?: DefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Definitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Definitions.
     */
    skip?: number
    distinct?: DefinitionScalarFieldEnum | DefinitionScalarFieldEnum[]
  }

  /**
   * Definition create
   */
  export type DefinitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    /**
     * The data needed to create a Definition.
     */
    data: XOR<DefinitionCreateInput, DefinitionUncheckedCreateInput>
  }

  /**
   * Definition createMany
   */
  export type DefinitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Definitions.
     */
    data: DefinitionCreateManyInput | DefinitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Definition createManyAndReturn
   */
  export type DefinitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * The data used to create many Definitions.
     */
    data: DefinitionCreateManyInput | DefinitionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Definition update
   */
  export type DefinitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    /**
     * The data needed to update a Definition.
     */
    data: XOR<DefinitionUpdateInput, DefinitionUncheckedUpdateInput>
    /**
     * Choose, which Definition to update.
     */
    where: DefinitionWhereUniqueInput
  }

  /**
   * Definition updateMany
   */
  export type DefinitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Definitions.
     */
    data: XOR<DefinitionUpdateManyMutationInput, DefinitionUncheckedUpdateManyInput>
    /**
     * Filter which Definitions to update
     */
    where?: DefinitionWhereInput
    /**
     * Limit how many Definitions to update.
     */
    limit?: number
  }

  /**
   * Definition updateManyAndReturn
   */
  export type DefinitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * The data used to update Definitions.
     */
    data: XOR<DefinitionUpdateManyMutationInput, DefinitionUncheckedUpdateManyInput>
    /**
     * Filter which Definitions to update
     */
    where?: DefinitionWhereInput
    /**
     * Limit how many Definitions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Definition upsert
   */
  export type DefinitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    /**
     * The filter to search for the Definition to update in case it exists.
     */
    where: DefinitionWhereUniqueInput
    /**
     * In case the Definition found by the `where` argument doesn't exist, create a new Definition with this data.
     */
    create: XOR<DefinitionCreateInput, DefinitionUncheckedCreateInput>
    /**
     * In case the Definition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DefinitionUpdateInput, DefinitionUncheckedUpdateInput>
  }

  /**
   * Definition delete
   */
  export type DefinitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    /**
     * Filter which Definition to delete.
     */
    where: DefinitionWhereUniqueInput
  }

  /**
   * Definition deleteMany
   */
  export type DefinitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Definitions to delete
     */
    where?: DefinitionWhereInput
    /**
     * Limit how many Definitions to delete.
     */
    limit?: number
  }

  /**
   * Definition without action
   */
  export type DefinitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
  }


  /**
   * Model TranslationHistory
   */

  export type AggregateTranslationHistory = {
    _count: TranslationHistoryCountAggregateOutputType | null
    _min: TranslationHistoryMinAggregateOutputType | null
    _max: TranslationHistoryMaxAggregateOutputType | null
  }

  export type TranslationHistoryMinAggregateOutputType = {
    id: string | null
    originalText: string | null
    translatedText: string | null
    sourceLanguage: string | null
    targetLanguage: string | null
    createdAt: Date | null
  }

  export type TranslationHistoryMaxAggregateOutputType = {
    id: string | null
    originalText: string | null
    translatedText: string | null
    sourceLanguage: string | null
    targetLanguage: string | null
    createdAt: Date | null
  }

  export type TranslationHistoryCountAggregateOutputType = {
    id: number
    originalText: number
    translatedText: number
    sourceLanguage: number
    targetLanguage: number
    createdAt: number
    _all: number
  }


  export type TranslationHistoryMinAggregateInputType = {
    id?: true
    originalText?: true
    translatedText?: true
    sourceLanguage?: true
    targetLanguage?: true
    createdAt?: true
  }

  export type TranslationHistoryMaxAggregateInputType = {
    id?: true
    originalText?: true
    translatedText?: true
    sourceLanguage?: true
    targetLanguage?: true
    createdAt?: true
  }

  export type TranslationHistoryCountAggregateInputType = {
    id?: true
    originalText?: true
    translatedText?: true
    sourceLanguage?: true
    targetLanguage?: true
    createdAt?: true
    _all?: true
  }

  export type TranslationHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TranslationHistory to aggregate.
     */
    where?: TranslationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationHistories to fetch.
     */
    orderBy?: TranslationHistoryOrderByWithRelationInput | TranslationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TranslationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TranslationHistories
    **/
    _count?: true | TranslationHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranslationHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranslationHistoryMaxAggregateInputType
  }

  export type GetTranslationHistoryAggregateType<T extends TranslationHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTranslationHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranslationHistory[P]>
      : GetScalarType<T[P], AggregateTranslationHistory[P]>
  }




  export type TranslationHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationHistoryWhereInput
    orderBy?: TranslationHistoryOrderByWithAggregationInput | TranslationHistoryOrderByWithAggregationInput[]
    by: TranslationHistoryScalarFieldEnum[] | TranslationHistoryScalarFieldEnum
    having?: TranslationHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranslationHistoryCountAggregateInputType | true
    _min?: TranslationHistoryMinAggregateInputType
    _max?: TranslationHistoryMaxAggregateInputType
  }

  export type TranslationHistoryGroupByOutputType = {
    id: string
    originalText: string
    translatedText: string
    sourceLanguage: string
    targetLanguage: string
    createdAt: Date
    _count: TranslationHistoryCountAggregateOutputType | null
    _min: TranslationHistoryMinAggregateOutputType | null
    _max: TranslationHistoryMaxAggregateOutputType | null
  }

  type GetTranslationHistoryGroupByPayload<T extends TranslationHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranslationHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranslationHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranslationHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TranslationHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TranslationHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalText?: boolean
    translatedText?: boolean
    sourceLanguage?: boolean
    targetLanguage?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["translationHistory"]>

  export type TranslationHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalText?: boolean
    translatedText?: boolean
    sourceLanguage?: boolean
    targetLanguage?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["translationHistory"]>

  export type TranslationHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalText?: boolean
    translatedText?: boolean
    sourceLanguage?: boolean
    targetLanguage?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["translationHistory"]>

  export type TranslationHistorySelectScalar = {
    id?: boolean
    originalText?: boolean
    translatedText?: boolean
    sourceLanguage?: boolean
    targetLanguage?: boolean
    createdAt?: boolean
  }

  export type TranslationHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "originalText" | "translatedText" | "sourceLanguage" | "targetLanguage" | "createdAt", ExtArgs["result"]["translationHistory"]>

  export type $TranslationHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TranslationHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      originalText: string
      translatedText: string
      sourceLanguage: string
      targetLanguage: string
      createdAt: Date
    }, ExtArgs["result"]["translationHistory"]>
    composites: {}
  }

  type TranslationHistoryGetPayload<S extends boolean | null | undefined | TranslationHistoryDefaultArgs> = $Result.GetResult<Prisma.$TranslationHistoryPayload, S>

  type TranslationHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TranslationHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TranslationHistoryCountAggregateInputType | true
    }

  export interface TranslationHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TranslationHistory'], meta: { name: 'TranslationHistory' } }
    /**
     * Find zero or one TranslationHistory that matches the filter.
     * @param {TranslationHistoryFindUniqueArgs} args - Arguments to find a TranslationHistory
     * @example
     * // Get one TranslationHistory
     * const translationHistory = await prisma.translationHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TranslationHistoryFindUniqueArgs>(args: SelectSubset<T, TranslationHistoryFindUniqueArgs<ExtArgs>>): Prisma__TranslationHistoryClient<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TranslationHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TranslationHistoryFindUniqueOrThrowArgs} args - Arguments to find a TranslationHistory
     * @example
     * // Get one TranslationHistory
     * const translationHistory = await prisma.translationHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TranslationHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TranslationHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TranslationHistoryClient<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TranslationHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationHistoryFindFirstArgs} args - Arguments to find a TranslationHistory
     * @example
     * // Get one TranslationHistory
     * const translationHistory = await prisma.translationHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TranslationHistoryFindFirstArgs>(args?: SelectSubset<T, TranslationHistoryFindFirstArgs<ExtArgs>>): Prisma__TranslationHistoryClient<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TranslationHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationHistoryFindFirstOrThrowArgs} args - Arguments to find a TranslationHistory
     * @example
     * // Get one TranslationHistory
     * const translationHistory = await prisma.translationHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TranslationHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TranslationHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TranslationHistoryClient<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TranslationHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TranslationHistories
     * const translationHistories = await prisma.translationHistory.findMany()
     * 
     * // Get first 10 TranslationHistories
     * const translationHistories = await prisma.translationHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const translationHistoryWithIdOnly = await prisma.translationHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TranslationHistoryFindManyArgs>(args?: SelectSubset<T, TranslationHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TranslationHistory.
     * @param {TranslationHistoryCreateArgs} args - Arguments to create a TranslationHistory.
     * @example
     * // Create one TranslationHistory
     * const TranslationHistory = await prisma.translationHistory.create({
     *   data: {
     *     // ... data to create a TranslationHistory
     *   }
     * })
     * 
     */
    create<T extends TranslationHistoryCreateArgs>(args: SelectSubset<T, TranslationHistoryCreateArgs<ExtArgs>>): Prisma__TranslationHistoryClient<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TranslationHistories.
     * @param {TranslationHistoryCreateManyArgs} args - Arguments to create many TranslationHistories.
     * @example
     * // Create many TranslationHistories
     * const translationHistory = await prisma.translationHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TranslationHistoryCreateManyArgs>(args?: SelectSubset<T, TranslationHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TranslationHistories and returns the data saved in the database.
     * @param {TranslationHistoryCreateManyAndReturnArgs} args - Arguments to create many TranslationHistories.
     * @example
     * // Create many TranslationHistories
     * const translationHistory = await prisma.translationHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TranslationHistories and only return the `id`
     * const translationHistoryWithIdOnly = await prisma.translationHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TranslationHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TranslationHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TranslationHistory.
     * @param {TranslationHistoryDeleteArgs} args - Arguments to delete one TranslationHistory.
     * @example
     * // Delete one TranslationHistory
     * const TranslationHistory = await prisma.translationHistory.delete({
     *   where: {
     *     // ... filter to delete one TranslationHistory
     *   }
     * })
     * 
     */
    delete<T extends TranslationHistoryDeleteArgs>(args: SelectSubset<T, TranslationHistoryDeleteArgs<ExtArgs>>): Prisma__TranslationHistoryClient<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TranslationHistory.
     * @param {TranslationHistoryUpdateArgs} args - Arguments to update one TranslationHistory.
     * @example
     * // Update one TranslationHistory
     * const translationHistory = await prisma.translationHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TranslationHistoryUpdateArgs>(args: SelectSubset<T, TranslationHistoryUpdateArgs<ExtArgs>>): Prisma__TranslationHistoryClient<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TranslationHistories.
     * @param {TranslationHistoryDeleteManyArgs} args - Arguments to filter TranslationHistories to delete.
     * @example
     * // Delete a few TranslationHistories
     * const { count } = await prisma.translationHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TranslationHistoryDeleteManyArgs>(args?: SelectSubset<T, TranslationHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TranslationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TranslationHistories
     * const translationHistory = await prisma.translationHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TranslationHistoryUpdateManyArgs>(args: SelectSubset<T, TranslationHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TranslationHistories and returns the data updated in the database.
     * @param {TranslationHistoryUpdateManyAndReturnArgs} args - Arguments to update many TranslationHistories.
     * @example
     * // Update many TranslationHistories
     * const translationHistory = await prisma.translationHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TranslationHistories and only return the `id`
     * const translationHistoryWithIdOnly = await prisma.translationHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends TranslationHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TranslationHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TranslationHistory.
     * @param {TranslationHistoryUpsertArgs} args - Arguments to update or create a TranslationHistory.
     * @example
     * // Update or create a TranslationHistory
     * const translationHistory = await prisma.translationHistory.upsert({
     *   create: {
     *     // ... data to create a TranslationHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TranslationHistory we want to update
     *   }
     * })
     */
    upsert<T extends TranslationHistoryUpsertArgs>(args: SelectSubset<T, TranslationHistoryUpsertArgs<ExtArgs>>): Prisma__TranslationHistoryClient<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TranslationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationHistoryCountArgs} args - Arguments to filter TranslationHistories to count.
     * @example
     * // Count the number of TranslationHistories
     * const count = await prisma.translationHistory.count({
     *   where: {
     *     // ... the filter for the TranslationHistories we want to count
     *   }
     * })
    **/
    count<T extends TranslationHistoryCountArgs>(
      args?: Subset<T, TranslationHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranslationHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TranslationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TranslationHistoryAggregateArgs>(args: Subset<T, TranslationHistoryAggregateArgs>): Prisma.PrismaPromise<GetTranslationHistoryAggregateType<T>>

    /**
     * Group by TranslationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationHistoryGroupByArgs} args - Group by arguments.
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
      T extends TranslationHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TranslationHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TranslationHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TranslationHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranslationHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TranslationHistory model
   */
  readonly fields: TranslationHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TranslationHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TranslationHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TranslationHistory model
   */
  interface TranslationHistoryFieldRefs {
    readonly id: FieldRef<"TranslationHistory", 'String'>
    readonly originalText: FieldRef<"TranslationHistory", 'String'>
    readonly translatedText: FieldRef<"TranslationHistory", 'String'>
    readonly sourceLanguage: FieldRef<"TranslationHistory", 'String'>
    readonly targetLanguage: FieldRef<"TranslationHistory", 'String'>
    readonly createdAt: FieldRef<"TranslationHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TranslationHistory findUnique
   */
  export type TranslationHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * Filter, which TranslationHistory to fetch.
     */
    where: TranslationHistoryWhereUniqueInput
  }

  /**
   * TranslationHistory findUniqueOrThrow
   */
  export type TranslationHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * Filter, which TranslationHistory to fetch.
     */
    where: TranslationHistoryWhereUniqueInput
  }

  /**
   * TranslationHistory findFirst
   */
  export type TranslationHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * Filter, which TranslationHistory to fetch.
     */
    where?: TranslationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationHistories to fetch.
     */
    orderBy?: TranslationHistoryOrderByWithRelationInput | TranslationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TranslationHistories.
     */
    cursor?: TranslationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranslationHistories.
     */
    distinct?: TranslationHistoryScalarFieldEnum | TranslationHistoryScalarFieldEnum[]
  }

  /**
   * TranslationHistory findFirstOrThrow
   */
  export type TranslationHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * Filter, which TranslationHistory to fetch.
     */
    where?: TranslationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationHistories to fetch.
     */
    orderBy?: TranslationHistoryOrderByWithRelationInput | TranslationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TranslationHistories.
     */
    cursor?: TranslationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranslationHistories.
     */
    distinct?: TranslationHistoryScalarFieldEnum | TranslationHistoryScalarFieldEnum[]
  }

  /**
   * TranslationHistory findMany
   */
  export type TranslationHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * Filter, which TranslationHistories to fetch.
     */
    where?: TranslationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationHistories to fetch.
     */
    orderBy?: TranslationHistoryOrderByWithRelationInput | TranslationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TranslationHistories.
     */
    cursor?: TranslationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationHistories.
     */
    skip?: number
    distinct?: TranslationHistoryScalarFieldEnum | TranslationHistoryScalarFieldEnum[]
  }

  /**
   * TranslationHistory create
   */
  export type TranslationHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a TranslationHistory.
     */
    data: XOR<TranslationHistoryCreateInput, TranslationHistoryUncheckedCreateInput>
  }

  /**
   * TranslationHistory createMany
   */
  export type TranslationHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TranslationHistories.
     */
    data: TranslationHistoryCreateManyInput | TranslationHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TranslationHistory createManyAndReturn
   */
  export type TranslationHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many TranslationHistories.
     */
    data: TranslationHistoryCreateManyInput | TranslationHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TranslationHistory update
   */
  export type TranslationHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a TranslationHistory.
     */
    data: XOR<TranslationHistoryUpdateInput, TranslationHistoryUncheckedUpdateInput>
    /**
     * Choose, which TranslationHistory to update.
     */
    where: TranslationHistoryWhereUniqueInput
  }

  /**
   * TranslationHistory updateMany
   */
  export type TranslationHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TranslationHistories.
     */
    data: XOR<TranslationHistoryUpdateManyMutationInput, TranslationHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TranslationHistories to update
     */
    where?: TranslationHistoryWhereInput
    /**
     * Limit how many TranslationHistories to update.
     */
    limit?: number
  }

  /**
   * TranslationHistory updateManyAndReturn
   */
  export type TranslationHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * The data used to update TranslationHistories.
     */
    data: XOR<TranslationHistoryUpdateManyMutationInput, TranslationHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TranslationHistories to update
     */
    where?: TranslationHistoryWhereInput
    /**
     * Limit how many TranslationHistories to update.
     */
    limit?: number
  }

  /**
   * TranslationHistory upsert
   */
  export type TranslationHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the TranslationHistory to update in case it exists.
     */
    where: TranslationHistoryWhereUniqueInput
    /**
     * In case the TranslationHistory found by the `where` argument doesn't exist, create a new TranslationHistory with this data.
     */
    create: XOR<TranslationHistoryCreateInput, TranslationHistoryUncheckedCreateInput>
    /**
     * In case the TranslationHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TranslationHistoryUpdateInput, TranslationHistoryUncheckedUpdateInput>
  }

  /**
   * TranslationHistory delete
   */
  export type TranslationHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * Filter which TranslationHistory to delete.
     */
    where: TranslationHistoryWhereUniqueInput
  }

  /**
   * TranslationHistory deleteMany
   */
  export type TranslationHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TranslationHistories to delete
     */
    where?: TranslationHistoryWhereInput
    /**
     * Limit how many TranslationHistories to delete.
     */
    limit?: number
  }

  /**
   * TranslationHistory without action
   */
  export type TranslationHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
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


  export const DictionaryEntryScalarFieldEnum: {
    id: 'id',
    word: 'word',
    language: 'language',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DictionaryEntryScalarFieldEnum = (typeof DictionaryEntryScalarFieldEnum)[keyof typeof DictionaryEntryScalarFieldEnum]


  export const DefinitionScalarFieldEnum: {
    id: 'id',
    meaning: 'meaning',
    partOfSpeech: 'partOfSpeech',
    examples: 'examples',
    dictionaryEntryId: 'dictionaryEntryId'
  };

  export type DefinitionScalarFieldEnum = (typeof DefinitionScalarFieldEnum)[keyof typeof DefinitionScalarFieldEnum]


  export const TranslationHistoryScalarFieldEnum: {
    id: 'id',
    originalText: 'originalText',
    translatedText: 'translatedText',
    sourceLanguage: 'sourceLanguage',
    targetLanguage: 'targetLanguage',
    createdAt: 'createdAt'
  };

  export type TranslationHistoryScalarFieldEnum = (typeof TranslationHistoryScalarFieldEnum)[keyof typeof TranslationHistoryScalarFieldEnum]


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
   * Deep Input Types
   */


  export type DictionaryEntryWhereInput = {
    AND?: DictionaryEntryWhereInput | DictionaryEntryWhereInput[]
    OR?: DictionaryEntryWhereInput[]
    NOT?: DictionaryEntryWhereInput | DictionaryEntryWhereInput[]
    id?: StringFilter<"DictionaryEntry"> | string
    word?: StringFilter<"DictionaryEntry"> | string
    language?: StringFilter<"DictionaryEntry"> | string
    createdAt?: DateTimeFilter<"DictionaryEntry"> | Date | string
    updatedAt?: DateTimeFilter<"DictionaryEntry"> | Date | string
    definition?: DefinitionListRelationFilter
  }

  export type DictionaryEntryOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    definition?: DefinitionOrderByRelationAggregateInput
  }

  export type DictionaryEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    word_language?: DictionaryEntryWordLanguageCompoundUniqueInput
    AND?: DictionaryEntryWhereInput | DictionaryEntryWhereInput[]
    OR?: DictionaryEntryWhereInput[]
    NOT?: DictionaryEntryWhereInput | DictionaryEntryWhereInput[]
    word?: StringFilter<"DictionaryEntry"> | string
    language?: StringFilter<"DictionaryEntry"> | string
    createdAt?: DateTimeFilter<"DictionaryEntry"> | Date | string
    updatedAt?: DateTimeFilter<"DictionaryEntry"> | Date | string
    definition?: DefinitionListRelationFilter
  }, "id" | "word_language">

  export type DictionaryEntryOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DictionaryEntryCountOrderByAggregateInput
    _max?: DictionaryEntryMaxOrderByAggregateInput
    _min?: DictionaryEntryMinOrderByAggregateInput
  }

  export type DictionaryEntryScalarWhereWithAggregatesInput = {
    AND?: DictionaryEntryScalarWhereWithAggregatesInput | DictionaryEntryScalarWhereWithAggregatesInput[]
    OR?: DictionaryEntryScalarWhereWithAggregatesInput[]
    NOT?: DictionaryEntryScalarWhereWithAggregatesInput | DictionaryEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DictionaryEntry"> | string
    word?: StringWithAggregatesFilter<"DictionaryEntry"> | string
    language?: StringWithAggregatesFilter<"DictionaryEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DictionaryEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DictionaryEntry"> | Date | string
  }

  export type DefinitionWhereInput = {
    AND?: DefinitionWhereInput | DefinitionWhereInput[]
    OR?: DefinitionWhereInput[]
    NOT?: DefinitionWhereInput | DefinitionWhereInput[]
    id?: StringFilter<"Definition"> | string
    meaning?: StringFilter<"Definition"> | string
    partOfSpeech?: StringFilter<"Definition"> | string
    examples?: StringNullableListFilter<"Definition">
    dictionaryEntryId?: StringFilter<"Definition"> | string
    dictionaryEntry?: XOR<DictionaryEntryScalarRelationFilter, DictionaryEntryWhereInput>
  }

  export type DefinitionOrderByWithRelationInput = {
    id?: SortOrder
    meaning?: SortOrder
    partOfSpeech?: SortOrder
    examples?: SortOrder
    dictionaryEntryId?: SortOrder
    dictionaryEntry?: DictionaryEntryOrderByWithRelationInput
  }

  export type DefinitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DefinitionWhereInput | DefinitionWhereInput[]
    OR?: DefinitionWhereInput[]
    NOT?: DefinitionWhereInput | DefinitionWhereInput[]
    meaning?: StringFilter<"Definition"> | string
    partOfSpeech?: StringFilter<"Definition"> | string
    examples?: StringNullableListFilter<"Definition">
    dictionaryEntryId?: StringFilter<"Definition"> | string
    dictionaryEntry?: XOR<DictionaryEntryScalarRelationFilter, DictionaryEntryWhereInput>
  }, "id">

  export type DefinitionOrderByWithAggregationInput = {
    id?: SortOrder
    meaning?: SortOrder
    partOfSpeech?: SortOrder
    examples?: SortOrder
    dictionaryEntryId?: SortOrder
    _count?: DefinitionCountOrderByAggregateInput
    _max?: DefinitionMaxOrderByAggregateInput
    _min?: DefinitionMinOrderByAggregateInput
  }

  export type DefinitionScalarWhereWithAggregatesInput = {
    AND?: DefinitionScalarWhereWithAggregatesInput | DefinitionScalarWhereWithAggregatesInput[]
    OR?: DefinitionScalarWhereWithAggregatesInput[]
    NOT?: DefinitionScalarWhereWithAggregatesInput | DefinitionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Definition"> | string
    meaning?: StringWithAggregatesFilter<"Definition"> | string
    partOfSpeech?: StringWithAggregatesFilter<"Definition"> | string
    examples?: StringNullableListFilter<"Definition">
    dictionaryEntryId?: StringWithAggregatesFilter<"Definition"> | string
  }

  export type TranslationHistoryWhereInput = {
    AND?: TranslationHistoryWhereInput | TranslationHistoryWhereInput[]
    OR?: TranslationHistoryWhereInput[]
    NOT?: TranslationHistoryWhereInput | TranslationHistoryWhereInput[]
    id?: StringFilter<"TranslationHistory"> | string
    originalText?: StringFilter<"TranslationHistory"> | string
    translatedText?: StringFilter<"TranslationHistory"> | string
    sourceLanguage?: StringFilter<"TranslationHistory"> | string
    targetLanguage?: StringFilter<"TranslationHistory"> | string
    createdAt?: DateTimeFilter<"TranslationHistory"> | Date | string
  }

  export type TranslationHistoryOrderByWithRelationInput = {
    id?: SortOrder
    originalText?: SortOrder
    translatedText?: SortOrder
    sourceLanguage?: SortOrder
    targetLanguage?: SortOrder
    createdAt?: SortOrder
  }

  export type TranslationHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TranslationHistoryWhereInput | TranslationHistoryWhereInput[]
    OR?: TranslationHistoryWhereInput[]
    NOT?: TranslationHistoryWhereInput | TranslationHistoryWhereInput[]
    originalText?: StringFilter<"TranslationHistory"> | string
    translatedText?: StringFilter<"TranslationHistory"> | string
    sourceLanguage?: StringFilter<"TranslationHistory"> | string
    targetLanguage?: StringFilter<"TranslationHistory"> | string
    createdAt?: DateTimeFilter<"TranslationHistory"> | Date | string
  }, "id">

  export type TranslationHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    originalText?: SortOrder
    translatedText?: SortOrder
    sourceLanguage?: SortOrder
    targetLanguage?: SortOrder
    createdAt?: SortOrder
    _count?: TranslationHistoryCountOrderByAggregateInput
    _max?: TranslationHistoryMaxOrderByAggregateInput
    _min?: TranslationHistoryMinOrderByAggregateInput
  }

  export type TranslationHistoryScalarWhereWithAggregatesInput = {
    AND?: TranslationHistoryScalarWhereWithAggregatesInput | TranslationHistoryScalarWhereWithAggregatesInput[]
    OR?: TranslationHistoryScalarWhereWithAggregatesInput[]
    NOT?: TranslationHistoryScalarWhereWithAggregatesInput | TranslationHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TranslationHistory"> | string
    originalText?: StringWithAggregatesFilter<"TranslationHistory"> | string
    translatedText?: StringWithAggregatesFilter<"TranslationHistory"> | string
    sourceLanguage?: StringWithAggregatesFilter<"TranslationHistory"> | string
    targetLanguage?: StringWithAggregatesFilter<"TranslationHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TranslationHistory"> | Date | string
  }

  export type DictionaryEntryCreateInput = {
    id?: string
    word: string
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
    definition?: DefinitionCreateNestedManyWithoutDictionaryEntryInput
  }

  export type DictionaryEntryUncheckedCreateInput = {
    id?: string
    word: string
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
    definition?: DefinitionUncheckedCreateNestedManyWithoutDictionaryEntryInput
  }

  export type DictionaryEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    definition?: DefinitionUpdateManyWithoutDictionaryEntryNestedInput
  }

  export type DictionaryEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    definition?: DefinitionUncheckedUpdateManyWithoutDictionaryEntryNestedInput
  }

  export type DictionaryEntryCreateManyInput = {
    id?: string
    word: string
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DictionaryEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DictionaryEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DefinitionCreateInput = {
    id?: string
    meaning: string
    partOfSpeech: string
    examples?: DefinitionCreateexamplesInput | string[]
    dictionaryEntry: DictionaryEntryCreateNestedOneWithoutDefinitionInput
  }

  export type DefinitionUncheckedCreateInput = {
    id?: string
    meaning: string
    partOfSpeech: string
    examples?: DefinitionCreateexamplesInput | string[]
    dictionaryEntryId: string
  }

  export type DefinitionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    examples?: DefinitionUpdateexamplesInput | string[]
    dictionaryEntry?: DictionaryEntryUpdateOneRequiredWithoutDefinitionNestedInput
  }

  export type DefinitionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    examples?: DefinitionUpdateexamplesInput | string[]
    dictionaryEntryId?: StringFieldUpdateOperationsInput | string
  }

  export type DefinitionCreateManyInput = {
    id?: string
    meaning: string
    partOfSpeech: string
    examples?: DefinitionCreateexamplesInput | string[]
    dictionaryEntryId: string
  }

  export type DefinitionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    examples?: DefinitionUpdateexamplesInput | string[]
  }

  export type DefinitionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    examples?: DefinitionUpdateexamplesInput | string[]
    dictionaryEntryId?: StringFieldUpdateOperationsInput | string
  }

  export type TranslationHistoryCreateInput = {
    id?: string
    originalText: string
    translatedText: string
    sourceLanguage: string
    targetLanguage: string
    createdAt?: Date | string
  }

  export type TranslationHistoryUncheckedCreateInput = {
    id?: string
    originalText: string
    translatedText: string
    sourceLanguage: string
    targetLanguage: string
    createdAt?: Date | string
  }

  export type TranslationHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    translatedText?: StringFieldUpdateOperationsInput | string
    sourceLanguage?: StringFieldUpdateOperationsInput | string
    targetLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    translatedText?: StringFieldUpdateOperationsInput | string
    sourceLanguage?: StringFieldUpdateOperationsInput | string
    targetLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationHistoryCreateManyInput = {
    id?: string
    originalText: string
    translatedText: string
    sourceLanguage: string
    targetLanguage: string
    createdAt?: Date | string
  }

  export type TranslationHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    translatedText?: StringFieldUpdateOperationsInput | string
    sourceLanguage?: StringFieldUpdateOperationsInput | string
    targetLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    translatedText?: StringFieldUpdateOperationsInput | string
    sourceLanguage?: StringFieldUpdateOperationsInput | string
    targetLanguage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DefinitionListRelationFilter = {
    every?: DefinitionWhereInput
    some?: DefinitionWhereInput
    none?: DefinitionWhereInput
  }

  export type DefinitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DictionaryEntryWordLanguageCompoundUniqueInput = {
    word: string
    language: string
  }

  export type DictionaryEntryCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DictionaryEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DictionaryEntryMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    language?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DictionaryEntryScalarRelationFilter = {
    is?: DictionaryEntryWhereInput
    isNot?: DictionaryEntryWhereInput
  }

  export type DefinitionCountOrderByAggregateInput = {
    id?: SortOrder
    meaning?: SortOrder
    partOfSpeech?: SortOrder
    examples?: SortOrder
    dictionaryEntryId?: SortOrder
  }

  export type DefinitionMaxOrderByAggregateInput = {
    id?: SortOrder
    meaning?: SortOrder
    partOfSpeech?: SortOrder
    dictionaryEntryId?: SortOrder
  }

  export type DefinitionMinOrderByAggregateInput = {
    id?: SortOrder
    meaning?: SortOrder
    partOfSpeech?: SortOrder
    dictionaryEntryId?: SortOrder
  }

  export type TranslationHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    originalText?: SortOrder
    translatedText?: SortOrder
    sourceLanguage?: SortOrder
    targetLanguage?: SortOrder
    createdAt?: SortOrder
  }

  export type TranslationHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    originalText?: SortOrder
    translatedText?: SortOrder
    sourceLanguage?: SortOrder
    targetLanguage?: SortOrder
    createdAt?: SortOrder
  }

  export type TranslationHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    originalText?: SortOrder
    translatedText?: SortOrder
    sourceLanguage?: SortOrder
    targetLanguage?: SortOrder
    createdAt?: SortOrder
  }

  export type DefinitionCreateNestedManyWithoutDictionaryEntryInput = {
    create?: XOR<DefinitionCreateWithoutDictionaryEntryInput, DefinitionUncheckedCreateWithoutDictionaryEntryInput> | DefinitionCreateWithoutDictionaryEntryInput[] | DefinitionUncheckedCreateWithoutDictionaryEntryInput[]
    connectOrCreate?: DefinitionCreateOrConnectWithoutDictionaryEntryInput | DefinitionCreateOrConnectWithoutDictionaryEntryInput[]
    createMany?: DefinitionCreateManyDictionaryEntryInputEnvelope
    connect?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
  }

  export type DefinitionUncheckedCreateNestedManyWithoutDictionaryEntryInput = {
    create?: XOR<DefinitionCreateWithoutDictionaryEntryInput, DefinitionUncheckedCreateWithoutDictionaryEntryInput> | DefinitionCreateWithoutDictionaryEntryInput[] | DefinitionUncheckedCreateWithoutDictionaryEntryInput[]
    connectOrCreate?: DefinitionCreateOrConnectWithoutDictionaryEntryInput | DefinitionCreateOrConnectWithoutDictionaryEntryInput[]
    createMany?: DefinitionCreateManyDictionaryEntryInputEnvelope
    connect?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DefinitionUpdateManyWithoutDictionaryEntryNestedInput = {
    create?: XOR<DefinitionCreateWithoutDictionaryEntryInput, DefinitionUncheckedCreateWithoutDictionaryEntryInput> | DefinitionCreateWithoutDictionaryEntryInput[] | DefinitionUncheckedCreateWithoutDictionaryEntryInput[]
    connectOrCreate?: DefinitionCreateOrConnectWithoutDictionaryEntryInput | DefinitionCreateOrConnectWithoutDictionaryEntryInput[]
    upsert?: DefinitionUpsertWithWhereUniqueWithoutDictionaryEntryInput | DefinitionUpsertWithWhereUniqueWithoutDictionaryEntryInput[]
    createMany?: DefinitionCreateManyDictionaryEntryInputEnvelope
    set?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
    disconnect?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
    delete?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
    connect?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
    update?: DefinitionUpdateWithWhereUniqueWithoutDictionaryEntryInput | DefinitionUpdateWithWhereUniqueWithoutDictionaryEntryInput[]
    updateMany?: DefinitionUpdateManyWithWhereWithoutDictionaryEntryInput | DefinitionUpdateManyWithWhereWithoutDictionaryEntryInput[]
    deleteMany?: DefinitionScalarWhereInput | DefinitionScalarWhereInput[]
  }

  export type DefinitionUncheckedUpdateManyWithoutDictionaryEntryNestedInput = {
    create?: XOR<DefinitionCreateWithoutDictionaryEntryInput, DefinitionUncheckedCreateWithoutDictionaryEntryInput> | DefinitionCreateWithoutDictionaryEntryInput[] | DefinitionUncheckedCreateWithoutDictionaryEntryInput[]
    connectOrCreate?: DefinitionCreateOrConnectWithoutDictionaryEntryInput | DefinitionCreateOrConnectWithoutDictionaryEntryInput[]
    upsert?: DefinitionUpsertWithWhereUniqueWithoutDictionaryEntryInput | DefinitionUpsertWithWhereUniqueWithoutDictionaryEntryInput[]
    createMany?: DefinitionCreateManyDictionaryEntryInputEnvelope
    set?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
    disconnect?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
    delete?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
    connect?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
    update?: DefinitionUpdateWithWhereUniqueWithoutDictionaryEntryInput | DefinitionUpdateWithWhereUniqueWithoutDictionaryEntryInput[]
    updateMany?: DefinitionUpdateManyWithWhereWithoutDictionaryEntryInput | DefinitionUpdateManyWithWhereWithoutDictionaryEntryInput[]
    deleteMany?: DefinitionScalarWhereInput | DefinitionScalarWhereInput[]
  }

  export type DefinitionCreateexamplesInput = {
    set: string[]
  }

  export type DictionaryEntryCreateNestedOneWithoutDefinitionInput = {
    create?: XOR<DictionaryEntryCreateWithoutDefinitionInput, DictionaryEntryUncheckedCreateWithoutDefinitionInput>
    connectOrCreate?: DictionaryEntryCreateOrConnectWithoutDefinitionInput
    connect?: DictionaryEntryWhereUniqueInput
  }

  export type DefinitionUpdateexamplesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DictionaryEntryUpdateOneRequiredWithoutDefinitionNestedInput = {
    create?: XOR<DictionaryEntryCreateWithoutDefinitionInput, DictionaryEntryUncheckedCreateWithoutDefinitionInput>
    connectOrCreate?: DictionaryEntryCreateOrConnectWithoutDefinitionInput
    upsert?: DictionaryEntryUpsertWithoutDefinitionInput
    connect?: DictionaryEntryWhereUniqueInput
    update?: XOR<XOR<DictionaryEntryUpdateToOneWithWhereWithoutDefinitionInput, DictionaryEntryUpdateWithoutDefinitionInput>, DictionaryEntryUncheckedUpdateWithoutDefinitionInput>
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

  export type DefinitionCreateWithoutDictionaryEntryInput = {
    id?: string
    meaning: string
    partOfSpeech: string
    examples?: DefinitionCreateexamplesInput | string[]
  }

  export type DefinitionUncheckedCreateWithoutDictionaryEntryInput = {
    id?: string
    meaning: string
    partOfSpeech: string
    examples?: DefinitionCreateexamplesInput | string[]
  }

  export type DefinitionCreateOrConnectWithoutDictionaryEntryInput = {
    where: DefinitionWhereUniqueInput
    create: XOR<DefinitionCreateWithoutDictionaryEntryInput, DefinitionUncheckedCreateWithoutDictionaryEntryInput>
  }

  export type DefinitionCreateManyDictionaryEntryInputEnvelope = {
    data: DefinitionCreateManyDictionaryEntryInput | DefinitionCreateManyDictionaryEntryInput[]
    skipDuplicates?: boolean
  }

  export type DefinitionUpsertWithWhereUniqueWithoutDictionaryEntryInput = {
    where: DefinitionWhereUniqueInput
    update: XOR<DefinitionUpdateWithoutDictionaryEntryInput, DefinitionUncheckedUpdateWithoutDictionaryEntryInput>
    create: XOR<DefinitionCreateWithoutDictionaryEntryInput, DefinitionUncheckedCreateWithoutDictionaryEntryInput>
  }

  export type DefinitionUpdateWithWhereUniqueWithoutDictionaryEntryInput = {
    where: DefinitionWhereUniqueInput
    data: XOR<DefinitionUpdateWithoutDictionaryEntryInput, DefinitionUncheckedUpdateWithoutDictionaryEntryInput>
  }

  export type DefinitionUpdateManyWithWhereWithoutDictionaryEntryInput = {
    where: DefinitionScalarWhereInput
    data: XOR<DefinitionUpdateManyMutationInput, DefinitionUncheckedUpdateManyWithoutDictionaryEntryInput>
  }

  export type DefinitionScalarWhereInput = {
    AND?: DefinitionScalarWhereInput | DefinitionScalarWhereInput[]
    OR?: DefinitionScalarWhereInput[]
    NOT?: DefinitionScalarWhereInput | DefinitionScalarWhereInput[]
    id?: StringFilter<"Definition"> | string
    meaning?: StringFilter<"Definition"> | string
    partOfSpeech?: StringFilter<"Definition"> | string
    examples?: StringNullableListFilter<"Definition">
    dictionaryEntryId?: StringFilter<"Definition"> | string
  }

  export type DictionaryEntryCreateWithoutDefinitionInput = {
    id?: string
    word: string
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DictionaryEntryUncheckedCreateWithoutDefinitionInput = {
    id?: string
    word: string
    language: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DictionaryEntryCreateOrConnectWithoutDefinitionInput = {
    where: DictionaryEntryWhereUniqueInput
    create: XOR<DictionaryEntryCreateWithoutDefinitionInput, DictionaryEntryUncheckedCreateWithoutDefinitionInput>
  }

  export type DictionaryEntryUpsertWithoutDefinitionInput = {
    update: XOR<DictionaryEntryUpdateWithoutDefinitionInput, DictionaryEntryUncheckedUpdateWithoutDefinitionInput>
    create: XOR<DictionaryEntryCreateWithoutDefinitionInput, DictionaryEntryUncheckedCreateWithoutDefinitionInput>
    where?: DictionaryEntryWhereInput
  }

  export type DictionaryEntryUpdateToOneWithWhereWithoutDefinitionInput = {
    where?: DictionaryEntryWhereInput
    data: XOR<DictionaryEntryUpdateWithoutDefinitionInput, DictionaryEntryUncheckedUpdateWithoutDefinitionInput>
  }

  export type DictionaryEntryUpdateWithoutDefinitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DictionaryEntryUncheckedUpdateWithoutDefinitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DefinitionCreateManyDictionaryEntryInput = {
    id?: string
    meaning: string
    partOfSpeech: string
    examples?: DefinitionCreateexamplesInput | string[]
  }

  export type DefinitionUpdateWithoutDictionaryEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    examples?: DefinitionUpdateexamplesInput | string[]
  }

  export type DefinitionUncheckedUpdateWithoutDictionaryEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    examples?: DefinitionUpdateexamplesInput | string[]
  }

  export type DefinitionUncheckedUpdateManyWithoutDictionaryEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    meaning?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    examples?: DefinitionUpdateexamplesInput | string[]
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