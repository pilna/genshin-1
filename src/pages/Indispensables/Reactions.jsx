import React, { useContext } from 'react';
import Wrapper from '../../components/Wrapper';
import './Reactions.scss';
import colorContext from '../../contexts/element';
import { elements } from '../../components/Elements/elementsData';

const Reactions = () => {
  const { current, setColor } = useContext(colorContext);

  return (
    <Wrapper>
      <section className="reactions_container">
        <h1>Choose an element</h1>
        <div className="element_section">
          {elements.map(({ Component, color, name }) => (
            <Component
              key={color}
              className={`elements ${current === name ? '' : ' elements_inactive'}`}
              onClick={() => setColor(name)}
              size="45"
              color={color}
            />
          ))}
        </div>
        <div className="reactions_section">
          <h1>test</h1>
        </div>
      </section>
    </Wrapper>
  );
};

export default Reactions;
