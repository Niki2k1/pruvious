export interface ModuleOptions {
  /**
   * API configuration settings.
   */
  api: {
    /**
     * A string to prepend before the URL pathname for Pruvious API routes.
     *
     * @default 'api'
     */
    prefix?: string

    /**
     * This configuration object contains predefined API routes generated by Pruvious.
     * It uses a key-value structure where the key represents the route handle,
     * and the value represents the relative route path to `prefix`.
     *
     * To disable specific routes, set their handle to `false`.
     * You can also customize the route path to your preference.
     *
     * By default, all routes are enabled.
     *
     * @example
     * ```typescript
     * {
     *   'login.post': 'auth/login', // Change login path to http://localhost:3000/api/auth/login
     *   '*': false, // Disable the "catch-all" route
     * }
     * ```
     */
    routes?: {
      /**
       * Endpoint for purging the cache.
       * This route is inaccessible when Redis is deactivated.
       *
       * Assign `false` to disable this endpoint.
       *
       * @default 'clear-cache'
       */
      'clear-cache.post'?: string | false

      /**
       * Defines the prefix for collection routes.
       * By default, collection routes follow the structure `/api/collections/[collection-name]`.
       *
       * To use a top-level route structure like `/api/[collection-name]`, set this prefix to an empty string (`''`).
       *
       * To disable collection routes entirely, set this parameter to `false`.
       *
       * @default 'collections'
       */
      'collections'?: string | false

      /**
       * Route for retrieving necessary metadata to display the dashboard.
       *
       * Set to `false` to deactivate this route.
       *
       * @default 'dashboard'
       */
      'dashboard.get'?: string | false

      /**
       * Route for registering the initial admin user in the CMS.
       *
       * Set to `false` to deactivate this route.
       *
       * @default 'install'
       */
      'install.post'?: string | false

      /**
       * Route to check if the CMS is installed (initial admin user created).
       *
       * Set to `false` to deactivate this route.
       *
       * @default 'installed'
       */
      'installed.get'?: string | false

      /**
       * A route that handles user logins.
       *
       * Set to `false` to deactivate this route.
       *
       * @default 'login'
       */
      'login.post'?: string | false

      /**
       * A route that handles user logouts and JWT removal.
       *
       * Set to `false` to deactivate this route.
       *
       * @default 'logout'
       */
      'logout.post'?: string | false

      /**
       * A route that handles user logouts from all sessions.
       *
       * Set to `false` to deactivate this route.
       *
       * @default 'logout-all'
       */
      'logout-all.post'?: string | false

      /**
       * A route that handles user logouts from other sessions.
       *
       * Set to `false` to deactivate this route.
       *
       * @default 'logout-others'
       */
      'logout-others.post'?: string | false

      /**
       * Route for fetching public pages.
       * Also enables the `/:catchAll(.*)` route for Nuxt that displays the page with the given slug.
       *
       * Set to `false` to deactivate this route.
       *
       * @default 'pages'
       */
      'pages.get'?: string | false

      /**
       * Route for fetching previews.
       *
       * Set to `false` to deactivate this route.
       *
       * @default 'previews'
       */
      'previews.get'?: string | false

      /**
       * Route for processing a single job used in the `processJob()` and `processJobQueue()` helper functions.
       *
       * Set to `false` to deactivate this route.
       *
       * @default 'process-job'
       */
      'process-job.post'?: string | false

      /**
       * Route for fetching the current authenticated user's profile.
       *
       * Set to `false` to deactivate this route.
       *
       * @default 'profile'
       */
      'profile.get'?: string | false

      /**
       * Route for updating the current authenticated user's profile.
       *
       * Set to `false` to deactivate this route.
       *
       * @default 'profile'
       */
      'profile.patch'?: string | false

      /**
       * Route for renewing JSON Web Tokens.
       *
       * Set to `false` to deactivate this route.
       *
       * @default 'renew-token'
       */
      'renew-token.post'?: string | false

      /**
       * Route for the robots.txt file.
       *
       * Set to `false` to deactivate this route.
       *
       * Note: The `seo` collection must be registered as a standard collection for this route to work.
       *
       * @default 'robots.txt'
       */
      'robots.txt.get'?: string | false

      /**
       * Base route for the sitemap.
       * When there are more than 1000 entries, the sitemap is split into multiple files (e.g., `sitemap.xml/1`, `sitemap.xml/2`, etc.).
       *
       * Set to `false` to deactivate this route.
       *
       * Note: The `seo` collection must be registered as a standard collection for this route to work.
       *
       * @default 'sitemap.xml'
       */
      'sitemap.xml.get'?: string | false

      /**
       * Route for fetching translatable strings.
       *
       * Set to `false` to deactivate this route.
       *
       * @default 'translatable-strings'
       */
      'translatable-strings.get'?: string | false

      /**
       * Specifies whether to enable a "catch-all" route that displays unified `404` errors for nonexistent Pruvious API routes.
       *
       * @default true
       */
      '*'?: boolean
    }
  }

  /**
   * An array of custom capability names to add to the auto-generated user capabilities.
   * Capabilities should be in kebab case (e.g., 'send-email', 'access-analytics', etc.).
   *
   * @default []
   *
   */
  customCapabilities: string[]

  /**
   * Dashboard configuration settings.
   *
   */
  dashboard: {
    /**
     * Customize the base Vue components within the Pruvious dashboard using this map.
     * Replace values with relative paths to your custom components to personalize the dashboard.
     * Paths should be relative to your Nuxt app directory (e.g., `./components/Dashboard/Login.vue`).
     *
     * Note: Field components customization involves extending the standard field and adjusting its `vueComponent` setting.
     */
    baseComponents?: {
      /**
       * Screen for listing all records in a multi-entry collection or editing a single-entry collection.
       *
       * @example './components/Dashboard/Collections/Overview.vue'
       */
      'collections/overview'?: string

      /**
       * Screen for creating or editing a multi-entry collection record.
       *
       * @example './components/Dashboard/Collections/Record.vue'
       */
      'collections/record'?: string

      /**
       * Defines the base title and favicon for the dashboard.
       *
       * @example './components/Dashboard/Head.vue'
       */
      'head'?: string

      /**
       * The logo displayed in the dashboard header.
       *
       * @example './components/Dashboard/Header/Logo.vue'
       */
      'header/logo'?: string

      /**
       * Screen for CMS installation.
       *
       * @example './components/Dashboard/Install.vue'
       */
      'install'?: string

      /**
       * Primary login screen.
       *
       * @example './components/Dashboard/Login.vue'
       */
      'login'?: string

      /**
       * The logo displayed on the login screen.
       *
       * @example './components/Dashboard/Login/Logo.vue'
       */
      'login/logo'?: string

      /**
       * Component for logging out of the dashboard.
       *
       * @example './components/Dashboard/Logout.vue'
       */
      'logout'?: string

      /**
       * Screen for managing user uploads.
       *
       * @example './components/Dashboard/Media.vue'
       */
      'media'?: string

      /**
       * Miscellaneous components used in the dashboard.
       *
       * @example
       * ```typescript
       * {
       *   Base: './components/Dashboard/Misc/Base.vue',
       *   Dialog: './components/Dashboard/Misc/CustomDialog.vue',
       * }
       * ```
       */
      'misc'?: {
        AddBlockPopup?: string
        Base?: string
        BlockTreeItem?: string
        BooleanFieldPreview?: string
        CollectionsContentRecord?: string
        CollectionsSimpleRecord?: string
        CollectionTranslations?: string
        DateFormatField?: string
        DateTimeFormatField?: string
        Dialog?: string
        DragImage?: string
        FieldLayout?: string
        FieldLayoutTabs?: string
        FilterPopup?: string
        FilterRule?: string
        Globals?: string
        HistoryButtons?: string
        ImagePreview?: string
        InputError?: string
        LegalLinks?: string
        LoadingIndicator?: string
        Logo?: string
        LogoFull?: string
        MediaBreadcrumbs?: string
        MediaDirectoryPopup?: string
        MediaFileInput?: string
        MediaItemDirectory?: string
        MediaItemUpload?: string
        MediaLibrary?: string
        MediaLibraryPopup?: string
        MediaMovePopup?: string
        MediaMovePopupItem?: string
        MediaUploadPopup?: string
        MoreBlockOptionsPopup?: string
        MultiCollectionsOverview?: string
        Popup?: string
        QuickActions?: string
        SearchMedia?: string
        SearchRecords?: string
        SingleCollectionsOverview?: string
        StringFieldPreview?: string
        TableColumnsPopup?: string
        TablePagination?: string
        TableSorter?: string
        Toaster?: string
        TranslationsFieldPreview?: string
        UnsavedChanges?: string
      }
    }

    /**
     * Set this parameter to `false` to completely disable the dashboard.
     *
     * @default true
     */
    enabled?: boolean

    /**
     * Links displayed beneath forms on authentication screens within the dashboard.
     *
     * @default []
     */
    legalLinks?: {
      /**
       * The label shown for the link.
       */
      label: string

      /**
       * The URL of an external web page.
       */
      url: string
    }[]

    /**
     * A string to prepend before the pathname for dashboard routes (e.g., `http://localhost:3000/[prefix]/login`).
     *
     * @default 'dashboard'
     */
    prefix?: string

    /**
     * Whether to remove the stylesheets of the Nuxt app when the dashboard is active.
     *
     * @default true
     */
    removeSiteStyles?: boolean
  }

  /**
   * The database connection string.
   * It must start with either `sqlite:` or `postgresql:`, depending on whether SQLite or PostgreSQL is being used.
   *
   * For **SQLite**, provide a relative path to the database file.
   * Example: `sqlite:./database.db`
   *
   * For **PostgreSQL**, the connection URI should follow the format `postgresql://[userspec@][hostspec][/dbname][?paramspec]`.
   * Example: `postgresql://username:password@127.0.0.1:5432/database`
   *
   * @default 'sqlite:./pruvious.db'
   *
   * @see https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING-URIS
   */
  database: string

  /**
   * Configuration for asynchronous job queue processing.
   *
   * Set to `false` to completely disable job processing.
   *
   * @default { searchInterval: 60 }
   */
  jobs:
    | {
        /**
         * A search interval in **seconds** that triggers a job search for each running Nuxt instance.
         *
         * @default 60
         */
        searchInterval?: number
      }
    | false

  /**
   * Configuration settings for JSON Web Tokens (JWT) used in authentication.
   */
  jwt: {
    /**
     * Default token expiration time in seconds or a time span string (e.g., 60, '2 minutes', '10h', '7d').
     *
     * @default '4 hours'
     */
    expiration?: string

    /**
     * Extended token expiration time in seconds or a time span string (e.g., 60, '2 minutes', '10h', '7d').
     *
     * This kind of token is generated during login with the `remember` parameter set to `true`.
     *
     * @default '7 days'
     */
    expirationLong?: string

    /**
     * Token renewal interval in **minutes** during dashboard usage.
     *
     * Note: Token is also renewed on each hard refresh.
     *
     * @default 30
     */
    renewInterval?: number

    /**
     * The secret key is used for signing tokens.
     * It should never be shared or exposed to anyone.
     * If the key is compromised, it must be replaced with a new one.
     *
     * In production environments, you can use the env variable `NUXT_PRUVIOUS_JWT_SECRET_KEY` to set the secret key.
     *
     * If not explicitly set, a randomly generated secret key will be used.
     *
     * @see https://pruvious.com/generate-key
     */
    secretKey?: string

    /**
     * The name of the item key in the local storage used to store the JSON Web Token.
     *
     * @default 'token'
     */
    localStorageKey?: string
  }

  /**
   * Configuration for localization settings within the CMS.
   *
   * By default, only English (en) is supported.
   */
  language: {
    /**
     * List of supported languages in the CMS.
     *
     * @default
     * [{ name: 'English', code: 'en' }]
     */
    supported?: {
      /**
       * The name of the language, usually in its native form (e.g., 'English', 'Deutsch', etc.).
       */
      name: string

      /**
       * Language code compliant with the HTML `hreflang` attribute, often in ISO 639-1 format
       * (e.g., 'en' for English, 'de' for German, etc.).
       *
       * @see https://en.m.wikipedia.org/wiki/List_of_ISO_639-1_codes
       */
      code: string
    }[]

    /**
     * Code representing the primary CMS language.
     * It must correspond to a language code within the `supported` languages array.
     *
     * @default 'en'
     */
    primary?: string

    /**
     * Determines whether the primary language code should be prefixed to the URL.
     * By default, all languages except the primary one are prefixed (e.g., `https://example.com/de/page-path`).
     *
     * @default false
     */
    prefixPrimary?: boolean

    /**
     * The name of the item key in the local storage used to store the current language.
     *
     * @default 'language'
     */
    localStorageKey?: string
  }

  /**
   * Specifies whether a database migration should be automatically performed after connecting.
   * When enabled, the migration uses the Sequelize method `sync({ alter: true })`.
   *
   * Set this option to `false` if you want to disable database migrations.
   *
   * @default true
   */
  migration: boolean

  /**
   * Connection string for the Redis database.
   * It should follow the format `redis[s]://[userspec@][hostspec][/dbnumber]`.
   * Example: `redis://username:password@127.0.0.1:6379/0`
   *
   * The Redis database is used for caching SQL queries and JSON Web Tokens.
   *
   * Set to `false` to disable Redis.
   *
   * @default false
   */
  redis: string | false

  /**
   * The name of the database table for storing single-entry collections.
   *
   * @default 'single_collections'
   */
  singleCollectionsTable: string

  /**
   * Specifies the default registration status of standard collections in the CMS.
   *
   * By default, all standard collections are registered.
   */
  standardCollections: {
    /**
     * Specifies whether the `pages` collection is registered as a standard collection.
     * This collection handles website pages in the CMS.
     *
     * @default true
     */
    pages?: boolean

    /**
     * Specifies whether the `presets` collection and the `Preset` block are registered as standard.
     * This collection handles reusable block presets for page-like collection.
     *
     * @default true
     */
    presets?: boolean

    /**
     * Specifies whether the `previews` collection is registered as a standard collection.
     * This collection stores previews for collections that support content blocks.
     *
     * @default true
     */
    previews?: boolean

    /**
     * Specifies whether the `redirects` collection is registered as a standard collection.
     * This collection manages URL redirects.
     *
     * @default true
     */
    redirects?: boolean

    /**
     * Specifies whether the `roles` collection is registered as a standard collection.
     * This collection simplifies user capability management.
     *
     * @default true
     */
    roles?: boolean

    /**
     * Specifies whether the `seo` collection is registered as a standard collection.
     * This collection provides built-in search engine optimization features for page-like collections.
     *
     * @default true
     */
    seo?: boolean

    /**
     * Specifies whether the `uploads` collection is registered as a standard collection.
     * This collection manages file uploads and image optimization.
     *
     * @default true
     */
    uploads?: boolean

    /**
     * Specifies whether the `users` collection is registered as a standard collection.
     * This collection is tightly bound with the authentication and API guard functionalities.
     *
     * @default true
     */
    users?: boolean
  }

  /**
   * Specifies the default registration status of standard fields in the CMS.
   *
   * By default, all standard fields are registered.
   */
  standardFields: {
    /**
     * Determines whether the 'block' field is registered as a standard field.
     *
     * @default true
     */
    'block'?: boolean

    /**
     * Determines whether the 'button-group' field is registered as a standard field.
     *
     * @default true
     */
    'button-group'?: boolean

    /**
     * Determines whether the 'checkbox' field is registered as a standard field.
     *
     * @default true
     */
    'checkbox'?: boolean

    /**
     * Determines whether the 'checkboxes' field is registered as a standard field.
     *
     * @default true
     */
    'checkboxes'?: boolean

    /**
     * Determines whether the 'chips' field is registered as a standard field.
     *
     * @default true
     */
    'chips'?: boolean

    /**
     * Determines whether the 'date' field is registered as a standard field.
     *
     * @default true
     */
    'date'?: boolean

    /**
     * Determines whether the 'date-range' field is registered as a standard field.
     *
     * @default true
     */
    'date-range'?: boolean

    /**
     * Determines whether the 'date-time' field is registered as a standard field.
     *
     * @default true
     */
    'date-time'?: boolean

    /**
     * Determines whether the 'date-time-range' field is registered as a standard field.
     *
     * @default true
     */
    'date-time-range'?: boolean

    /**
     * Determines whether the 'editor' field is registered as a standard field.
     *
     * @default true
     */
    'editor'?: boolean

    /**
     * Determines whether the 'file' field is registered as a standard field.
     *
     * @default true
     */
    'file'?: boolean

    /**
     * Determines whether the 'icon' field is registered as a standard field.
     *
     * @default true
     */
    'icon'?: boolean

    /**
     * Determines whether the 'image' field is registered as a standard field.
     *
     * @default true
     */
    'image'?: boolean

    /**
     * Determines whether the 'link' field is registered as a standard field.
     *
     * @default true
     */
    'link'?: boolean

    /**
     * Determines whether the 'number' field is registered as a standard field.
     *
     * @default true
     */
    'number'?: boolean

    /**
     * Determines whether the 'range' field is registered as a standard field.
     *
     * @default true
     */
    'range'?: boolean

    /**
     * Determines whether the 'record' field is registered as a standard field.
     *
     * @default true
     */
    'record'?: boolean

    /**
     * Determines whether the 'records' field is registered as a standard field.
     *
     * @default true
     */
    'records'?: boolean

    /**
     * Determines whether the 'repeater' field is registered as a standard field.
     *
     * @default true
     */
    'repeater'?: boolean

    /**
     * Determines whether the 'select' field is registered as a standard field.
     *
     * @default true
     */
    'select'?: boolean

    /**
     * Determines whether the 'size' field is registered as a standard field.
     *
     * @default true
     */
    'size'?: boolean

    /**
     * Determines whether the 'slider' field is registered as a standard field.
     *
     * @default true
     */
    'slider'?: boolean

    /**
     * Determines whether the 'slider-range' field is registered as a standard field.
     *
     * @default true
     */
    'slider-range'?: boolean

    /**
     * Determines whether the 'switch' field is registered as a standard field.
     *
     * @default true
     */
    'switch'?: boolean

    /**
     * Determines whether the 'text' field is registered as a standard field.
     *
     * @default true
     */
    'text'?: boolean

    /**
     * Determines whether the 'text-area' field is registered as a standard field.
     *
     * @default true
     */
    'text-area'?: boolean

    /**
     * Determines whether the 'time' field is registered as a standard field.
     *
     * @default true
     */
    'time'?: boolean

    /**
     * Determines whether the 'time-range' field is registered as a standard field.
     *
     * @default true
     */
    'time-range'?: boolean
  }

  /**
   * Specifies the default registration status of standard hooks in the CMS.
   *
   * By default, all standard hooks are registered.
   */
  standardHooks: {
    /**
     * Determines whether the 'redirects' hook is registered as a standard hook.
     * This hook is responsible for clearing the URL redirect cache after a redirect is created or updated.
     *
     * @default true
     */
    redirects?: boolean
  }

  /**
   * Specifies the default registration status of standard jobs in the CMS.
   *
   * By default, all standard jobs are registered.
   */
  standardJobs: {
    /**
     * Determines whether the standard 'clean-expired-previews' job is registered.
     * This job is responsible for removing expired collection record previews every 30 minutes.
     *
     * @default true
     */
    'clean-expired-previews'?: boolean

    /**
     * Determines whether the standard 'clean-expired-tokens' job is registered.
     * This job is responsible for removing expired JSON Web Tokens from the database every 30 minutes.
     *
     * @default true
     */
    'clean-expired-tokens'?: boolean

    /**
     * Determines whether the standard 'publish-pages' job is registered.
     * This job is responsible for publishing scheduled pages every 60 seconds.
     *
     * @default true
     */
    'publish-pages'?: boolean
  }

  /**
   * Specifies the global registration status of standard middleware in the app.
   *
   * By default, all standard middleware are registered globally.
   */
  standardMiddleware: {
    /**
     * Client-side middleware.
     */
    client: {
      /**
       * Determines whether the `pruvious-auth` middleware is globally registered.
       * Set to `false` to exclude it from all app routes.
       * This middleware remains available for manual inclusion on specific pages.
       *
       * @default true
       */
      auth?: boolean
    }

    /**
     * Server-side middleware.
     */
    server: {
      /**
       * Reads the JSON Web Token from the request header and verifies it.
       * Provides the `auth` object to the `event.context` object.
       * Set to `false` to disable this middleware.
       *
       * @default true
       */
      auth?: boolean

      /**
       * Resolves the module options and initiates job queues.
       * This is an internal middleware that should not be disabled.
       *
       * @default true
       */
      config?: boolean

      /**
       * Sets the current language based on the `Accept-Language` header.
       * Provides the `language` object to the `event.context` object.
       * Set to `false` to disable this middleware.
       *
       * @default true
       */
      language?: boolean
    }
  }

  /**
   * Specifies the default registration status of standard translatable strings in the CMS.
   *
   * By default, all standard translatable strings are registered.
   */
  standardTranslatableStrings: {
    /**
     * Determines whether the standard 'pruvious-dashboard' translatable strings are registered.
     *
     * @default true
     */
    dashboard?: boolean

    /**
     * Determines whether the standard 'pruvious-server' translatable strings are registered.
     *
     * @default true
     */
    server?: boolean
  }

  /**
   * Upload settings.
   * To disable upload functionality, set this to `false`.
   *
   * Pruvious stores information about uploads in the `uploads` collection by default.
   */
  uploads: {
    /**
     * Configure the file system for uploads.
     *
     * @default
     * { type: 'local', path: './.uploads' }
     */
    drive?:
      | {
          /**
           * The storage type.
           *
           * Local file system.
           */
          type: 'local'

          /**
           * A path, either absolute or relative, indicating the directory in the project where uploaded files are stored.
           * It could look like `'./.uploads'`, for instance.
           *
           * @default './.uploads'
           */
          path?: string

          /**
           * A URL prefix for accessing uploaded files.
           * For example, the `urlPrefix` value of `'files'` will result in the following URL: `http://localhost:3000/files/[upload-path]`.
           *
           * Pruvious creates a symbolic link in Nuxt's `public` directory matching the `urlPrefix` name.
           * Due to this implementation, `urlPrefix` cannot be an empty string or a path that already exists in the `public` directory.
           *
           * @default 'uploads'
           */
          urlPrefix?: string
        }
      | {
          /**
           * The storage type.
           *
           * S3-compatible service like Amazon S3 or DigitalOcean Spaces.
           */
          type: 's3'

          /**
           * The S3 access key.
           */
          key: string

          /**
           * The S3 secret key.
           */
          secret: string

          /**
           * The S3 bucket name.
           *
           * Example: `your-space-here`
           */
          bucket: string

          /**
           * The S3 region.
           *
           * Example: `fra1`
           */
          region: string

          /**
           * The S3 endpoint.
           *
           * Example: `https://fra1.digitaloceanspaces.com`
           */
          endpoint: string

          /**
           * The base URL for accessing uploaded files.
           *
           * Example: `https://your-space-here.fra1.digitaloceanspaces.com`
           */
          baseUrl: string

          /**
           * Whether to force path style URLs for S3 objects
           * (e.g., https://s3.amazonaws.com// instead of https://.s3.amazonaws.com/).
           *
           * @default false
           */
          forcePathStyle?: boolean
        }

    /**
     * Specifies the maximum file size for uploads.
     * You can provide this limit as a string (e.g., '32 MB') or as an integer, reflecting byte count.
     * String sizes are parsed using the `bytes` npm package.
     *
     * @default '16 MB'
     */
    maxFileSize?: number | string
  }

  /**
   * Specifies whether to enable the `/:catchAll(.*)` page route for Nuxt.
   * This route displays the page with the given slug.
   *
   * @default true
   */
  catchAllPages?: boolean

  /**
   * Configuration for page caching.
   * By default, pages are cached locally in the `.cache` directory.
   * Page caching is only enabled in production environments.
   *
   * Set to `false` to disable this feature.
   *
   * @default
   * { type: 'local', path: './.cache/pages' }
   */
  pageCache?:
    | {
        /**
         * Cache storage type.
         *
         * Local file system.
         */
        type: 'local'

        /**
         * A path, either absolute or relative, indicating the directory in the project where cached pages are stored.
         * It could look like `'./.cache/pages'`, for instance.
         */
        path: string
      }
    | {
        /**
         * Cache storage type.
         *
         * Redis database.
         *
         * Note: Redis must be enabled in the `redis` option.
         */
        type: 'redis'
      }
    | false
}
