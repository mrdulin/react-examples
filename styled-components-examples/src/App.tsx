import { GetStarted } from './01-get-started';
import { AdaptingBasedOnProps } from './02-adapting-based-on-props';
import { ExtendingStyles } from './03-extending-styles';
import { AsPolymorphicProp } from './04-as-polymorphic-prop';
import { StylingAnyComponent } from './05-styling-any-component';
import { PassedProps } from './06-passed-props';

function App() {
	return (
		<>
			<p>01. get-started</p>
			<GetStarted />
			<p>02. adapting-based-on-props</p>
			<AdaptingBasedOnProps />
			<p>03. extending-styles</p>
			<ExtendingStyles />
			<p>04. as-polymorphic-prop</p>
			<AsPolymorphicProp />
			<p>05. styling-any-component</p>
			<StylingAnyComponent />
			<p>06. passed-props</p>
			<PassedProps />
		</>
	);
}

export default App;
