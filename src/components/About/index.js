import React from 'react'
import { ReactComponent as ReactLogo } from '../../assets/media/react.svg'
import { ReactComponent as AngularLogo } from '../../assets/media/angular.svg'
import { ReactComponent as PythonLogo } from '../../assets/media/python.svg'
import { ReactComponent as CSharpLogo } from '../../assets/media/csharp.svg'
import { ReactComponent as JavaLogo } from '../../assets/media/java.svg'

export { ReactComponent as Signature } from '../../assets/media/signature_thick.svg'
export { ReactComponent as SketchylineUp } from '../../assets/media/sketchylines_up.svg'
export { ReactComponent as SketchylineDown } from '../../assets/media/sketchylines_down.svg'
export { default as Experiences } from './Experiences'
export { default as TopicLink } from './About'
export { default as jonasLight } from '../../assets/media/jonas_light.jpg'
export { default as jonasDark } from '../../assets/media/jonas_dark.jpg'

export const topicsList = [
  {
    name: 'React',
    logo: <ReactLogo />
  },
  {
    name: 'Angular',
    logo: <AngularLogo />
  },
  {
    name: 'Csharp',
    logo: <CSharpLogo />
  },
  {
    name: 'Python',
    logo: <PythonLogo />
  },
  {
    name: 'Java',
    logo: <JavaLogo />
  }
]
