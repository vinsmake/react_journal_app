import "./app.css";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";
import 'animate.css';

export const App = () => {
    return (
    <AppTheme>
        <AppRouter/>
    </AppTheme>
    )
}