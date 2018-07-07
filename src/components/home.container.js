import { connect } from 'react-redux';
import * as homeActions from '../modules/home.action';
import Home from './home';


const mapStateToProps = (state) => {
    return {
        api: state.api
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        apiRequest: () => dispatch(homeActions.apiRequest())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);