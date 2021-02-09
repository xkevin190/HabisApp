import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import DualComponent from './views/index'
import NewOrder from './views/NewOrder'

export const AppStackNavigator = createStackNavigator({
  inital: DualComponent,
  newOrder: NewOrder,
});


// eslint-disable-next-line no-undef
export default RouteContainer = createAppContainer(AppStackNavigator);