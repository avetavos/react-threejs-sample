import React, { useEffect, useRef } from 'react';
import ThreeEntryPoint from '../threejs/ThreeEntryPoint';

const ThreeContainer = () => {
  const scene = useRef(null);
  useEffect(() => {
    ThreeEntryPoint(scene.current);
  }, []);
  return (
    <>
      <div ref={scene} />
    </>
  );
};

export default ThreeContainer;

// import React, { Component } from 'react';
// import ThreeEntryPoint from '../threejs/ThreeEntryPoint';

// export default class ThreeContainer extends Component {

//   componentDidMount() {
//     ThreeEntryPoint(this.scene);
//   }

//   render() {
//     return (
//       <>
//         <div ref={element => this.scene = element} />
//       </>
//     );
//   }
// }
