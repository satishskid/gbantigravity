import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Health from './pages/Health';
import Soul from './pages/Soul';
import Lens from './pages/Lens';
import Academy from './pages/Academy';
import Lab from './pages/Lab';
import AdminBroadcast from './pages/AdminBroadcast';
import Updates from './pages/Updates';

function App() {
    const location = useLocation();

    return (
        <Layout>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/clinical-ai" element={<Health />} />
                    <Route path="/soul" element={<Soul />} />
                    <Route path="/lens" element={<Lens />} />
                    <Route path="/academy" element={<Academy />} />
                    <Route path="/lab" element={<Lab />} />
                    <Route path="/admin" element={<AdminBroadcast />} />
                    <Route path="/updates" element={<Updates />} />
                </Routes>
            </AnimatePresence>
        </Layout>
    );
}

export default App;
