import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from '../utils/Components/Markdown';
import Readme from '../../src/ToggleSelection/README.md';
import ExampleStandardComp from './ToggleSelectionExample';
import InteractiveCodeExample from '../utils/Components/InteractiveCodeExample/InteractiveCodeExample';
import TabbedView from '../utils/Components/TabbedView';
import ReadmeTestkit from '../../src/ToggleSelection/README.TESTKIT.md';

storiesOf('4. Selection', module)
  .add('4.5 ToggleSelection', () => {
    return (
      <TabbedView tabs={['API', 'Testkit']}>
        <div>
          <Markdown source={Readme}/>
          <InteractiveCodeExample title="Customize a <ToggleSelection/>">
            <ExampleStandardComp/>
          </InteractiveCodeExample>
        </div>
        <div>
          <Markdown source={ReadmeTestkit}/>
        </div>
      </TabbedView>
    );
  });
