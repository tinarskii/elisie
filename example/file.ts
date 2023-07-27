import { Elysia } from '../src'

/**
 * Example of handle single static file
 *
 * For more advance use-case, e.g. folder
 * @see https://github.com/elysiajs/elysia-static
 */
new Elysia()
	.get('/tako', ({ set }) => {
		set.headers.server = 'Elysia'

		return Bun.file('./example/takodachi.png')
	})
	.listen(8080)
