webpackJsonp([0x6be3685a7143],{442:function(e,t){e.exports={pathContext:{editPath:"core/deprecations.md",html:'<h1 id="deprecating-resources-and-properties-alternative-to-versioning"><a href="#deprecating-resources-and-properties-alternative-to-versioning" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deprecating Resources and Properties (Alternative to Versioning)</h1>\n<p>A best practice regarding web APIs development is to apply <a href="https://philsturgeon.uk/api/2018/05/02/api-evolution-for-rest-http-apis/" target="_blank" rel="nofollow noopener noreferrer">the evolution strategy</a>\nto indicate to client applications which resource types, operations and fields are deprecated and shouldn\'t be used anymore.</p>\n<p>While versioning an API requires modifying all clients to upgrade, even the ones not impacted by the changes.\nIt\'s a tedious task that should be avoided as much as possible.</p>\n<p>On the other hand, the evolution strategy (also known as versionless APIs) consists of deprecating the fields, resources\ntypes or operations that will be removed at some point.</p>\n<p>Most modern API formats including <a href="/docs/core/content-negotiation/">JSON-LD / Hydra</a>, <a href="/docs/core/graphql/">GraphQL</a> and <a href="/docs/core/swagger/">OpenAPI</a>\nallow to mark resources types, operations or fields as deprecated.</p>\n<h2 id="deprecating-resource-classes-operations-and-properties"><a href="#deprecating-resource-classes-operations-and-properties" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deprecating Resource Classes, Operations and Properties</h2>\n<p>When using API Platform, it\'s easy to mark a whole resource, a specific operation or a specific property as deprecated.\nAll documentation formats mentioned in the introduction will then automatically take the deprecation into account.</p>\n<p>To deprecate a resource class, use the <code class="language-text">deprecationReason</code> attribute:</p>\n<div class="gatsby-highlight" data-language="php">\n      <pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// api/src/Entity/Parchment.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource(deprecationReason="Create a Book instead")\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Parchment</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>As you can see, to deprecate a resource, we just have to explain what the client should do to upgrade in the dedicated attribute.</p>\n<p>The deprecation will automatically be taken into account by clients supporting the previously mentioned format, including\n<a href="/docs/admin/index/">API Platform Admin</a>, <a href="/docs/client-generator/index/">API Platform Client Generator</a> and the lower level\n<a href="https://github.com/api-platform/api-doc-parser" target="_blank" rel="nofollow noopener noreferrer">api-doc-parser library</a>.</p>\n<p>Here is how it renders for OpenAPI in the built-in Swagger UI shipped with the framework:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/deprecated-swagger-ui-874b63669db7f3a8000a6ee084fa1b3e-a1db2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1120px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 26.550680786686836%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAgElEQVQY052QQQ7CMAwE8/8XAhJwb23HSZ1cF9uoiBNqOYxWipxZJ+X+eOJyvWFZVqg21Kqe6lkztbU8/42i+ZyIoOQlZyWCuCSEQe8d22aYcx7GhqGQi4g4iYa9IBrHGKcwcyEzg1lSyF/CIAai+YgsN9yF5MQfvresn6f/I3wB+5d+9QVeNr4AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Deprecation shown in Swagger UI"\n        title=""\n        src="/static/deprecated-swagger-ui-874b63669db7f3a8000a6ee084fa1b3e-f066b.png"\n        srcset="/static/deprecated-swagger-ui-874b63669db7f3a8000a6ee084fa1b3e-324c3.png 280w,\n/static/deprecated-swagger-ui-874b63669db7f3a8000a6ee084fa1b3e-53f37.png 560w,\n/static/deprecated-swagger-ui-874b63669db7f3a8000a6ee084fa1b3e-f066b.png 1120w,\n/static/deprecated-swagger-ui-874b63669db7f3a8000a6ee084fa1b3e-a1db2.png 1322w"\n        sizes="(max-width: 1120px) 100vw, 1120px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>And now in the built-in version of GraphiQL (for GraphQL APIs):</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/deprecated-graphiql-8dcaaf2c57f36d71c7b6bfc2fc776fed-af672.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 426px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 47.652582159624416%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABcklEQVQoz5WR3W6cMBCFef+3SpRIvUulSlGiBTZsAGMbbINhMb+nY+9um4uoTRCfzow8nhkOEWMMnPNA0yjUdQ2lFICd3v2i33iiyY1wRNDJYRx97kKvCzu2bfsyUZprnJhBmitUmURbv6NriOoZVh4w6CLs+HfAv4msSunSG6w6YjlLYFGBfRJYxwqrk9gX/QXozmIRFfE9ePYDLH1EXTyhFS8Q+U8acABmBkwlNc9Ji6Cf4c/g41kiGnsGN4jA2fq4QkefOZ05sBma2pJaUgOsNsRYO6K9xpezfb5umOQGWdkhKQzeEgV56uCoMT/2tLlG38TQ/AgjT7DiFZ2IiQP5mwTt+AuW2YU/7L2Oep1haN/RmwwTbbk6TR42WEaF+VxjcwLzUFIuyVN+xdeJP/kWttOXDVl8B0keVukDmpK8a15Rs18YTEyNy+Bh8HK+6S3+kPuam4edymBNHvBxb07QIqGtfUFD0+vA/j8miY28/A0MPwG+0Ope3QAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Deprecation shown in GraphiQL"\n        title=""\n        src="/static/deprecated-graphiql-8dcaaf2c57f36d71c7b6bfc2fc776fed-af672.png"\n        srcset="/static/deprecated-graphiql-8dcaaf2c57f36d71c7b6bfc2fc776fed-e2756.png 280w,\n/static/deprecated-graphiql-8dcaaf2c57f36d71c7b6bfc2fc776fed-af672.png 426w"\n        sizes="(max-width: 426px) 100vw, 426px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>You can also use this new <code class="language-text">deprecationReason</code> attribute to deprecate specific <a href="/docs/core/operations/">operations</a>:</p>\n<div class="gatsby-highlight" data-language="php">\n      <pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// api/src/Entity/Parchment.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource(itemOperations={\n *     "get"={"deprecation_reason"="Retrieve a Book instead"}\n * })\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Parchment</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>It\'s also possible to deprecate a single property:</p>\n<div class="gatsby-highlight" data-language="php">\n      <pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// api/src/Entity/Review.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiProperty</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Review</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n\n    <span class="token comment">/**\n     * @ApiProperty(deprecationReason="Use the rating property instead")\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$letter</span><span class="token punctuation">;</span>\n    \n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<ul>\n<li>With JSON-lD / Hydra, <a href="https://www.w3.org/TR/owl2-syntax/#Annotation_Properties" target="_blank" rel="nofollow noopener noreferrer">an <code class="language-text">owl:deprecated</code> annotation property</a> will be added to the appropriate data structure</li>\n<li>With Swagger / OpenAPI, <a href="https://swagger.io/docs/specification/2-0/paths-and-operations/" target="_blank" rel="nofollow noopener noreferrer">a <code class="language-text">deprecated</code> property</a> will be added</li>\n<li>With GraphQL, the <a href="https://facebook.github.io/graphql/June2018/#sec-Deprecation" target="_blank" rel="nofollow noopener noreferrer"><code class="language-text">isDeprecated</code> and <code class="language-text">deprecationReason</code> properties</a> will be added to the schema</li>\n</ul>\n<h2 id="setting-the-code-classlanguage-textsunsetcode-http-header-to-indicate-when-a-resource-or-an-operation-will-be-removed"><a href="#setting-the-code-classlanguage-textsunsetcode-http-header-to-indicate-when-a-resource-or-an-operation-will-be-removed" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setting the <code class="language-text">Sunset</code> HTTP Header to Indicate When a Resource or an Operation Will Be Removed</h2>\n<p><a href="https://tools.ietf.org/html/draft-wilde-sunset-header" target="_blank" rel="nofollow noopener noreferrer">The <code class="language-text">Sunset</code> HTTP response header</a> indicates that a URI is likely to become unresponsive at a specified point in the future.\nIt is especially useful to indicate when a deprecated URL will not be available anymore.</p>\n<p>Thanks to the <code class="language-text">sunset</code> attribute, API Platform makes it easy to set this header for all URLs related to a resource class:</p>\n<div class="gatsby-highlight" data-language="php">\n      <pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// api/src/Entity/Parchment.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource(\n *   deprecationReason="Create a Book instead",\n *   sunset="01/01/2020"\n * )\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Parchment</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The value of the <code class="language-text">sunset</code> attribute can be any string compatible with <a href="http://php.net/manual/en/datetime.construct.php" target="_blank" rel="nofollow noopener noreferrer">the <code class="language-text">\\DateTime</code> constructor</a>.\nIt will be automatically converted to a valid HTTP date.</p>\n<p>It\'s also possible to set the <code class="language-text">Sunset</code> header only for a specific <a href="/docs/core/operations/">operation</a>:</p>\n<div class="gatsby-highlight" data-language="php">\n      <pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// api/src/Entity/Parchment.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource(itemOperations={\n *     "get"={\n *         "deprecation_reason"="Retrieve a Book instead",\n *         "sunset"="01/01/2020"\n *     }\n * })\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Parchment</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',nav:[{title:"The Distribution: Create Powerful APIs with Ease",path:"distribution",items:[{id:"index",title:"Getting Started with API Platform: Hypermedia and GraphQL API, Admin and Progressive Web App",anchors:[{id:"installing-the-framework",title:"Installing the Framework",anchors:[{id:"using-the-official-distribution-recommended",title:"Using the Official Distribution (recommended)"},{id:"using-symfony-flex-and-composer-advanced-users",title:"Using Symfony Flex and Composer (advanced users)"}]},{id:"its-ready",title:"It's Ready!"},{id:"bringing-your-own-model",title:"Bringing your Own Model"},{id:"validating-data",title:"Validating Data"},{id:"adding-graphql-support",title:"Adding GraphQL Support"},{id:"the-admin",title:"The Admin"},{id:"a-reactredux-progressive-web-app",title:"A React/Redux Progressive Web App"},{id:"other-features",title:"Other Features"}]},{id:"testing",title:"Testing and Specifying the API",anchors:[{id:"running-unit-tests-with-phpunit",title:"Running Unit Tests with PHPUnit"}]},{id:"debugging",title:"Debugging",anchors:[{id:"add-a-development-stage-to-the-dockerfile",title:"Add a Development Stage to the Dockerfile"},{id:"configure-xdebug-with-docker-compose-override",title:"Configure Xdebug with Docker Compose Override"},{id:"troubleshooting",title:"Troubleshooting"}]}]},{title:"The API Component",path:"core",items:[{id:"index",title:"The API Platform Core Library",anchors:[{id:"features",title:"Features"},{id:"other-resources",title:"Other resources"}]},{id:"getting-started",title:"Getting started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities"}]},{id:"design",title:"General Design Considerations"},{id:"operations",title:"Operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations",anchors:[{id:"prefixing-all-routes-of-all-operations",title:"Prefixing All Routes of All Operations"}]},{id:"subresources",title:"Subresources",anchors:[{id:"control-the-path-of-subresources",title:"Control the Path of Subresources"},{id:"access-control-of-subresources",title:"Access Control of Subresources"},{id:"control-the-depth-of-subresources",title:"Control the Depth of Subresources"}]},{id:"creating-custom-operations-and-controllers",title:"Creating Custom Operations and Controllers",anchors:[{id:"recommended-method",title:"Recommended Method",anchors:[{id:"serialization-groups",title:"Serialization Groups"},{id:"entity-retrieval",title:"Entity Retrieval"}]},{id:"alternative-method",title:"Alternative Method"}]}]},{id:"graphql",title:"GraphQL Support",anchors:[{id:"overall-view",title:"Overall View"},{id:"enabling-graphql",title:"Enabling GraphQL"},{id:"graphiql",title:"GraphiQL"},{id:"filters",title:"Filters",anchors:[{id:"filtering-on-nested-properties",title:"Filtering on Nested Properties"}]},{id:"security-access_control",title:"Security (access_control)"},{id:"serialization-groups-1",title:"Serialization Groups"}]},{id:"filters",title:"Filters",anchors:[{id:"doctrine-orm-filters",title:"Doctrine ORM Filters",anchors:[{id:"basic-knowledge",title:"Basic Knowledge"},{id:"search-filter",title:"Search Filter"},{id:"date-filter",title:"Date Filter",anchors:[{id:"managing-null-values",title:"Managing null Values"}]},{id:"boolean-filter",title:"Boolean Filter"},{id:"numeric-filter",title:"Numeric Filter"},{id:"range-filter",title:"Range Filter"},{id:"exists-filter",title:"Exists Filter"},{id:"order-filter-sorting",title:"Order Filter (Sorting)",anchors:[{id:"comparing-with-null-values",title:"Comparing with Null Values"},{id:"using-a-custom-order-query-parameter-name",title:"Using a Custom Order Query Parameter Name"}]},{id:"filtering-on-nested-properties-1",title:"Filtering on Nested Properties"},{id:"enabling-a-filter-for-all-properties-of-a-resource",title:"Enabling a Filter for All Properties of a Resource"}]},{id:"elasticsearch-filters",title:"Elasticsearch Filters",anchors:[{id:"ordering-filter-sorting",title:"Ordering Filter (Sorting)",anchors:[{id:"using-a-custom-order-query-parameter-name-1",title:"Using a Custom Order Query Parameter Name"}]},{id:"match-filter",title:"Match Filter"},{id:"term-filter",title:"Term Filter"},{id:"filtering-on-nested-properties-2",title:"Filtering on Nested Properties"}]},{id:"serializer-filters",title:"Serializer Filters",anchors:[{id:"group-filter",title:"Group Filter"},{id:"property-filter",title:"Property filter"}]},{id:"creating-custom-filters",title:"Creating Custom Filters",anchors:[{id:"creating-custom-doctrine-orm-filters",title:"Creating Custom Doctrine ORM Filters"},{id:"creating-custom-elasticsearch-filters",title:"Creating Custom Elasticsearch Filters"},{id:"using-doctrine-filters",title:"Using Doctrine Filters"}]},{id:"apifilter-annotation",title:"ApiFilter Annotation"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations",anchors:[{id:"configuration",title:"Configuration"}]},{id:"using-serialization-groups",title:"Using Serialization Groups"},{id:"using-serialization-groups-per-operation",title:"Using Serialization Groups per Operation",anchors:[{id:"embedding-relations",title:"Embedding Relations"},{id:"denormalization",title:"Denormalization"}]},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"changing-the-serialization-context-on-a-per-item-basis",title:"Changing the Serialization Context on a Per-item Basis"},{id:"name-conversion",title:"Name Conversion"},{id:"decorating-a-serializer-and-adding-extra-data",title:"Decorating a Serializer and Adding Extra Data"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"embedding-the-json-ld-context",title:"Embedding the JSON-LD Context"}]},{id:"validation",title:"Validation",anchors:[{id:"validating-submitted-data",title:"Validating Submitted Data"},{id:"using-validation-groups",title:"Using Validation Groups"},{id:"using-validation-groups-on-operations",title:"Using Validation Groups on Operations"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"},{id:"error-levels-and-payload-serialization",title:"Error Levels and Payload Serialization"}]},{id:"security",title:"Security",anchors:[{id:"configuring-the-access-control-message",title:"Configuring the Access Control Message"}]},{id:"data-providers",title:"Data Providers",anchors:[{id:"custom-collection-data-provider",title:"Custom Collection Data Provider"},{id:"custom-item-data-provider",title:"Custom Item Data Provider"},{id:"injecting-the-serializer-in-an-itemdataprovider",title:"Injecting the Serializer in an ItemDataProvider"},{id:"injecting-extensions-pagination-filter-eagerloading-etc",title:"Injecting Extensions (Pagination, Filter, EagerLoading etc.)"}]},{id:"data-persisters",title:"Data Persisters",anchors:[{id:"creating-a-custom-data-persister",title:"Creating a Custom Data Persister"}]},{id:"mercure",title:"Pushing Live Updates Using the Mercure Protocol",anchors:[{id:"installing-the-mercure-support",title:"Installing the Mercure Support"},{id:"pushing-the-api-updates",title:"Pushing the API Updates"},{id:"dispatching-private-updates-authorized-mode",title:"Dispatching Private Updates (Authorized Mode)"}]},{id:"elasticsearch",title:"Elasticsearch Support",anchors:[{id:"overview",title:"Overview"},{id:"enabling-reading-support",title:"Enabling reading support"},{id:"creating-models",title:"Creating models",anchors:[{id:"creating-custom-mapping",title:"Creating custom mapping"}]},{id:"filtering",title:"Filtering"},{id:"creating-custom-extensions",title:"Creating custom extensions"}]},{id:"pagination",title:"Pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination",anchors:[{id:"globally",title:"Globally"},{id:"for-a-specific-resource",title:"For a Specific Resource"},{id:"client-side",title:"Client-side",anchors:[{id:"globally-1",title:"Globally"},{id:"for-a-specific-resource-1",title:"For a specific resource"}]}]},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page",anchors:[{id:"globally-2",title:"Globally"},{id:"for-a-specific-resource-2",title:"For a Specific Resource"},{id:"client-side-1",title:"Client-side",anchors:[{id:"globally-3",title:"Globally"},{id:"for-a-specific-resource-3",title:"For a Specific Resource"}]}]},{id:"changing-maximum-items-per-page",title:"Changing Maximum items per page",anchors:[{id:"globally-4",title:"Globally"},{id:"for-a-specific-resource-4",title:"For a Specific Resource"},{id:"for-a-specific-resource-collection-operation",title:"For a Specific Resource Collection Operation"}]},{id:"partial-pagination",title:"Partial Pagination",anchors:[{id:"globally-5",title:"Globally"},{id:"for-a-specific-resource-5",title:"For a Specific Resource"},{id:"client-side-2",title:"Client-side",anchors:[{id:"globally-6",title:"Globally"},{id:"for-a-specific-resource-6",title:"For a Specific Resource"}]}]},{id:"avoiding-double-sql-requests-on-doctrine",title:"Avoiding double SQL requests on Doctrine"},{id:"custom-controller-action",title:"Custom Controller Action"}]},{id:"events",title:"The Event System"},{id:"content-negotiation",title:"Content Negotiation",anchors:[{id:"enabling-several-formats",title:"Enabling Several Formats"},{id:"enabling-additional-formats-on-a-specific-resourceoperation",title:"Enabling Additional Formats On a Specific Resource/Operation"},{id:"registering-a-custom-serializer",title:"Registering a Custom Serializer"},{id:"writing-a-custom-normalizer",title:"Writing a Custom Normalizer"}]},{id:"deprecations",title:"Deprecating Resources and Properties (Alternative to Versioning)",anchors:[{id:"deprecating-resource-classes-operations-and-properties",title:"Deprecating Resource Classes, Operations and Properties"},{id:"setting-the-sunset-http-header-to-indicate-when-a-resource-or-an-operation-will-be-removed",title:"Setting the Sunset HTTP Header to Indicate When a Resource or an Operation Will Be Removed"}]},{id:"performance",title:"Performance and Cache",anchors:[{id:"enabling-the-built-in-http-cache-invalidation-system",title:"Enabling the Built-in HTTP Cache Invalidation System",anchors:[{id:"extending-cache-tags-for-invalidation",title:"Extending Cache-Tags for invalidation"}]},{id:"setting-custom-http-cache-headers",title:"Setting Custom HTTP Cache Headers"},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-php-pm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes",anchors:[{id:"search-filter-1",title:"Search Filter"},{id:"eager-loading",title:"Eager Loading",anchors:[{id:"max-joins",title:"Max Joins"},{id:"force-eager",title:"Force Eager"},{id:"override-at-resource-and-operation-level",title:"Override at Resource and Operation Level"},{id:"disable-eager-loading",title:"Disable Eager Loading"}]},{id:"partial-pagination-1",title:"Partial Pagination"}]},{id:"profiling-with-blackfireio",title:"Profiling with Blackfire.io"}]},{id:"extensions",title:"Extensions",anchors:[{id:"custom-doctrine-orm-extension",title:"Custom Doctrine ORM Extension",anchors:[{id:"example",title:"Example",anchors:[{id:"blocking-anonymous-users",title:"Blocking Anonymous Users"}]}]},{id:"custom-elasticsearch-extension",title:"Custom Elasticsearch Extension"}]},{id:"swagger",title:"OpenAPI Specification Support (formerly Swagger)",anchors:[{id:"using-the-openapi-command",title:"Using the OpenAPI Command"},{id:"overriding-the-openapi-specification",title:"Overriding the OpenAPI Specification"},{id:"using-the-openapi-and-swagger-contexts",title:"Using the OpenAPI and Swagger Contexts"},{id:"changing-the-name-of-a-definition",title:"Changing the Name of a Definition"},{id:"changing-operations-in-the-openapi-documentation",title:"Changing Operations in the OpenAPI Documentation"},{id:"changing-the-location-of-swagger-ui",title:"Changing the Location of Swagger UI",anchors:[{id:"disabling-swagger-ui-or-of-redoc",title:"Disabling Swagger UI or of ReDoc"},{id:"manually-registering-the-swagger-ui-controller",title:"Manually Registering the Swagger UI Controller"}]},{id:"overriding-the-ui-template",title:"Overriding the UI Template"},{id:"compatibilily-layer-with-amazon-api-gateway",title:"Compatibilily Layer with Amazon API Gateway"}]},{id:"messenger",title:"Symfony Messenger Integration: CQRS and Async Message Processing",anchors:[{id:"installing-symfony-messenger",title:"Installing Symfony Messenger"},{id:"dispatching-a-resource-through-the-message-bus",title:"Dispatching a Resource through the Message Bus"},{id:"registering-a-message-handler",title:"Registering a Message Handler"},{id:"accessing-to-the-data-returned-by-the-handler",title:"Accessing to the Data Returned by the Handler"},{id:"detecting-removals",title:"Detecting Removals"}]},{id:"dto",title:"Using Data Transfer Objects (DTOs)",anchors:[{id:"specifying-an-input-or-an-output-class",title:"Specifying an Input or an Output Class"},{id:"disabling-the-input-or-the-output",title:"Disabling the Input or the Output"},{id:"creating-a-service-oriented-endpoint",title:"Creating a Service-Oriented endpoint"}]},{id:"push-relations",title:"Pushing Related Resources Using HTTP/2"},{id:"file-upload",title:"Handling File Upload",anchors:[{id:"installing-vichuploaderbundle",title:"Installing VichUploaderBundle"},{id:"configuring-the-entity-receiving-the-uploaded-file",title:"Configuring the Entity Receiving the Uploaded File"},{id:"handling-file-upload",title:"Handling File Upload"},{id:"making-a-request-to-the-media_objects-endpoint",title:"Making a Request to the /media_objects Endpoint"},{id:"linking-a-mediaobject-resource-to-another-resource",title:"Linking a MediaObject Resource to Another Resource"}]},{id:"default-order",title:"Overriding Default Order"},{id:"errors",title:"Errors Handling",anchors:[{id:"converting-php-exceptions-to-http-errors",title:"Converting PHP Exceptions to HTTP Errors"}]},{id:"external-vocabularies",title:"Using External Vocabularies"},{id:"operation-path-naming",title:"Operation Path Naming",anchors:[{id:"configuration-1",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Resolver",anchors:[{id:"defining-the-operation-path-resolver",title:"Defining the Operation Path Resolver"},{id:"registering-the-service",title:"Registering the Service"},{id:"configure-it",title:"Configure It"}]}]},{id:"extending-jsonld-context",title:"Extending JSON-LD context"},{id:"form-data",title:"Accept application/x-www-form-urlencoded Form Data",anchors:[{id:"create-your-deserializelistener-decorator",title:"Create your DeserializeListener Decorator"},{id:"creating-the-service-definition",title:"Creating the Service Definition"}]},{id:"identifiers",title:"Identifiers",anchors:[{id:"custom-identifier-normalizer",title:"Custom identifier normalizer"},{id:"supported-identifiers",title:"Supported identifiers"}]},{id:"jwt",title:"JWT Authentication",anchors:[{id:"installing-lexikjwtauthenticationbundle",title:"Installing LexikJWTAuthenticationBundle"},{id:"documenting-the-authentication-mechanism-with-swaggeropen-api",title:"Documenting the Authentication Mechanism with Swagger/Open API",anchors:[{id:"configuring-api-platform",title:"Configuring API Platform"},{id:"adding-a-new-api-key",title:"Adding a New API Key"}]},{id:"testing-with-behat",title:"Testing with Behat"}]},{id:"angularjs-integration",title:"AngularJS Integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ng-admin",title:"ng-admin"}]},{id:"fosuser-bundle",title:"FOSUserBundle Integration",
anchors:[{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:"Creating a User Entity with Serialization Groups"}]},{id:"nelmio-api-doc",title:"NelmioApiDocBundle Integration"},{id:"configuration",title:"Configuration"}]},{title:"The Schema Generator Component",path:"schema-generator",items:[{id:"index",title:"The schema generator",anchors:[{id:"what-is-schemaorg",title:"What is Schema.org?"},{id:"why-use-schemaorg-data-to-generate-a-php-model",title:"Why use Schema.org data to generate a PHP model?",anchors:[{id:"dont-reinvent-the-wheel",title:"Don't Reinvent The Wheel"},{id:"improve-seo-and-user-experience",title:"Improve SEO and user experience"},{id:"be-ready-for-the-future",title:"Be ready for the future"}]},{id:"documentation",title:"Documentation"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"model-scaffolding",title:"Model Scaffolding",anchors:[{id:"going-further",title:"Going Further"}]},{id:"cardinality-extraction",title:"Cardinality Extraction"}]},{id:"configuration",title:"Configuration",anchors:[{id:"customizing-php-namespaces",title:"Customizing PHP Namespaces"},{id:"forcing-a-field-range",title:"Forcing a Field Range"},{id:"forcing-a-field-cardinality",title:"Forcing a Field Cardinality"},{id:"forcing-a-relation-table-name",title:"Forcing a Relation Table Name"},{id:"forcing-or-disabling-a-class-parent",title:"Forcing (or Disabling) a Class Parent"},{id:"forcing-a-class-to-be-abstract",title:"Forcing a Class to be Abstract"},{id:"forcing-a-nullable-property",title:"Forcing a Nullable Property"},{id:"forcing-a-unique-property",title:"Forcing a Unique Property"},{id:"making-a-property-read-only",title:"Making a Property Read Only"},{id:"making-a-property-write-only",title:"Making a Property Write Only"},{id:"forcing-a-property-to-be-in-a-serialization-group",title:"Forcing a Property to be in a Serialization Group"},{id:"forcing-an-embeddable-class-to-be-embedded",title:"Forcing an Embeddable Class to be Embedded"},{id:"author-phpdoc",title:"Author PHPDoc"},{id:"disabling-generators-and-creating-custom-ones",title:"Disabling Generators and Creating Custom Ones"},{id:"skipping-accessor-method-generation",title:"Skipping Accessor Method Generation"},{id:"disabling-the-id-generator",title:"Disabling the id Generator"},{id:"generating-uuids",title:"Generating UUIDs"},{id:"user-submitted-uuids",title:"User submitted UUIDs"},{id:"generating-custom-ids",title:"Generating Custom IDs"},{id:"disabling-usage-of-doctrine-collection",title:"Disabling Usage of Doctrine Collection"},{id:"changing-the-field-visibility",title:"Changing the Field Visibility"},{id:"generating-asserttype-annotations",title:"Generating @Assert\\Type Annotations"},{id:"forcing-doctrine-inheritance-mapping-annotation",title:"Forcing Doctrine Inheritance Mapping Annotation"},{id:"interfaces-and-doctrine-resolve-target-entity-listener",title:"Interfaces and Doctrine Resolve Target Entity Listener"},{id:"custom-schemas",title:"Custom Schemas"},{id:"checking-goodrelation-compatibility",title:"Checking GoodRelation Compatibility"},{id:"php-file-header",title:"PHP File Header"},{id:"full-configuration-reference",title:"Full Configuration Reference"}]}]},{title:"The Admin Component",path:"admin",items:[{id:"index",title:"The API Platform Admin",anchors:[{id:"features-1",title:"Features"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation-1",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"},{id:"customizing-the-admin",title:"Customizing the Admin",anchors:[{id:"using-custom-components",title:"Using Custom Components"},{id:"managing-files-and-images",title:"Managing Files and Images"},{id:"using-a-custom-validation-function-or-inject-custom-props",title:"Using a Custom Validation Function or Inject Custom Props"},{id:"using-the-hydra-data-provider-directly-with-react-admin",title:"Using the Hydra Data Provider Directly with react-admin"}]}]},{id:"authentication-support",title:"Authentication Support"},{id:"handling-relations-to-collections",title:"Handling Relations to Collections",anchors:[{id:"customizing-a-property",title:"Customizing a Property"},{id:"customizing-an-icon",title:"Customizing an Icon"},{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]}]},{title:"The Client Generator Component",path:"client-generator",items:[{id:"index",title:"The API Platform Client Generator",anchors:[{id:"features-2",title:"Features"}]},{id:"react",title:"React Generator",anchors:[{id:"install",title:"Install"},{id:"generating-a-progressive-web-app",title:"Generating a Progressive Web App"},{id:"screenshots",title:"Screenshots"}]},{id:"vuejs",title:"Vue.js Generator"},{id:"react-native",title:"React Native generator",anchors:[{id:"install-1",title:"Install"},{id:"generating-a-native-app",title:"Generating a Native App"},{id:"screenshots-in-ios-simulator",title:"Screenshots in iOS Simulator"}]},{id:"troubleshooting",title:"Troubleshooting"}]},{title:"Deployment",path:"deployment",items:[{id:"index",title:"Deploying API Platform Applications"},{id:"kubernetes",title:"Deploying to a Kubernetes Cluster",anchors:[{id:"preparing-your-cluster-and-your-local-machine",title:"Preparing Your Cluster and Your Local Machine"},{id:"creating-and-publishing-the-docker-images",title:"Creating and Publishing the Docker Images"},{id:"deploying",title:"Deploying"},{id:"initializing-the-database",title:"Initializing the Database"},{id:"tiller-rbac-issue",title:"Tiller RBAC Issue"}]},{id:"heroku",title:"Deploying an API Platform App on Heroku"},{id:"traefik",title:"Implement Traefik Into API Platform Dockerized",anchors:[{id:"basic-implementation",title:"Basic Implementation"},{id:"known-issues",title:"Known Issues"}]}]},{title:"Extra",path:"extra",items:[{id:"releases",title:"The Release Process"},{id:"philosophy",title:"API Platform's Philosophy"},{id:"troubleshooting",title:"Troubleshooting",anchors:[{id:"using-docker",title:"Using Docker",anchors:[{id:"with-docker-toolbox-on-windows",title:"With Docker Toolbox on Windows"},{id:"error-starting-userland-proxy",title:"Error starting userland proxy"}]},{id:"using-api-platform-and-jms-serializer-in-the-same-project",title:"Using API Platform and JMS Serializer in the same project"},{id:"upstream-sent-too-big-header-while-reading-response-header-from-upstream-502-error",title:'"upstream sent too big header while reading response header from upstream" 502 Error'}]},{id:"contribution-guides",title:"Contribution guides"},{id:"conduct",title:"Contributor Code of Conduct"}]}]}}}});
//# sourceMappingURL=path---docs-core-deprecations-f4abda88d62c2a562a12.js.map