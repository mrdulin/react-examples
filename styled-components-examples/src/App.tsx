import { Refs } from './advanced/02-refs';
import { Security } from './advanced/03-security';
import { Conditionally } from './advanced/04-tagged-template-literals';
import { Caveat, ReferringToOtherComponents } from './advanced/05-referring-to-other-components';
import { GetStarted } from './basics/01-get-started';
import { AdaptingBasedOnProps } from './basics/02-adapting-based-on-props';
import { ExtendingStyles } from './basics/03-extending-styles';
import { AsPolymorphicProp } from './basics/04-as-polymorphic-prop';
import { StylingAnyComponent } from './basics/05-styling-any-component';
import { PassedProps } from './basics/06-passed-props';
import { AttachingAdditionalProps, OverridingAttrs } from './basics/07-attaching-additional-props ';
import { Animations } from './basics/08-animations';

function App() {
	return (
		<>
			<h2>Basics</h2>
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
			<p>07. attaching-additional-props </p>
			<AttachingAdditionalProps />
			<OverridingAttrs />
			<p>08. animations</p>
			<Animations />
			<h2>Advanced</h2>
			<p>02. refs</p>
			<Refs />
			<p>03. security</p>
			<Security />
			<p>04. tagged-template-iterals</p>
			<Conditionally />
			<p>05. referring-to-other-components</p>
			<ReferringToOtherComponents />
			<Caveat />
		</>
	);
}

export default App;
