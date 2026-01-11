import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TestModeProvider } from "./contexts/TestModeContext";
import { TestModeBanner } from "./components/TestModeBanner";
import LandingPage from "./pages/LandingPage";
import Quiz from "./pages/Quiz";
import Dashboard from "./pages/Dashboard";
import Upsell from "./pages/Upsell";
import Login from "./pages/Login";
import CourseDetail from "./pages/CourseDetail";
import LessonContent from "./pages/LessonContent";
import QuizContent from "./pages/QuizContent";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={LandingPage} />
      <Route path={"/login"} component={Login} />
      <Route path={"/quiz/:step?"} component={Quiz} />
      <Route path={"/dashboard/:tab?"} component={Dashboard} />
      <Route path={"/upsell"} component={Upsell} />
      <Route path={"/course/:courseId"} component={CourseDetail} />
      <Route path={"/lesson/:courseId/:moduleId"} component={LessonContent} />
      <Route path={"/course-quiz/:courseId/:moduleId"} component={QuizContent} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TestModeProvider>
          <TooltipProvider>
            <TestModeBanner />
            <Toaster />
            <Router />
          </TooltipProvider>
        </TestModeProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
