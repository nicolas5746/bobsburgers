import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Characters from '@/pages/characters/Characters';
import Home from '@/pages/home/Home';
import NotFound from '@/pages/notFound/NotFound';
import CharacterProvider from '@/providers/CharacterProvider';
import PageProvider from '@/providers/PageProvider';

const Router = () => {

    return (
        <CharacterProvider>
            <PageProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/character/:name' element={<Characters />} />
                        <Route path='/*' element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </PageProvider>
        </CharacterProvider>
    );
}

export default Router;