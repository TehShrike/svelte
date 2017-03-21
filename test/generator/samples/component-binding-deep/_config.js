export default {
	'skip-ssr': true, // TODO delete this line, once binding works

	solo: true,

	html: `
		<span data-currently-selected="false">1</span>
		<span data-currently-selected="true">2</span>
		<span data-currently-selected="false">1</span>
		<span data-currently-selected="true">2</span>
		<span data-currently-selected="false">1</span>
		<span data-currently-selected="true">2</span>
		<span data-currently-selected="false">1</span>
		<span data-currently-selected="true">2</span>
		<p>2</p>
	`,

	test ( assert, component, target, window ) {
		const click = new window.MouseEvent( 'click' );
		const clickable = target.querySelector( 'span' );

		clickable.dispatchEvent( click );

		assert.equal( component.get( 'x' ), null );

		assert.htmlEqual( target.innerHTML, `
			<span data-currently-selected="false">1</span>
			<span data-currently-selected="false">2</span>
			<span data-currently-selected="false">1</span>
			<span data-currently-selected="false">2</span>
			<span data-currently-selected="false">1</span>
			<span data-currently-selected="false">2</span>
			<span data-currently-selected="false">1</span>
			<span data-currently-selected="false">2</span>
			<p></p>
		` );
	}
};

