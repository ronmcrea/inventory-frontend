import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Outstanding from './pages/Outstanding';
import Stock from './pages/Stock';
import Borrow from './pages/Borrow';
import History from './pages/History';
import AddStock from './pages/AddStock';
import Layout from './pages/Layout';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from '@chakra-ui/react'
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout/>}>
    //       <Route index element={<Stock/>} />
    //       <Route path="borrow" element={<Borrow/>} />
    //       <Route path="history" element={<History/>} />
    //       <Route path="Outstanding" element={<Outstanding/>} />
    //       <Route path="Addstock" element={<AddStock/>} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <>
    <Flex padding={4} backgroundColor={'teal.500'} align="center">CTC Inventory</Flex>
    <Tabs isFitted colorScheme={'teal'}>
  <TabList>
    <Tab>Stock</Tab>
    <Tab>Add Stock</Tab>
    <Tab>Borrow</Tab>
    <Tab>Outstanding</Tab>
    <Tab>History</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <Stock/>
    </TabPanel>
    <TabPanel>
      <AddStock/>
    </TabPanel>
    <TabPanel>
      <Borrow/>
    </TabPanel>
    <TabPanel>
      <Outstanding/>
    </TabPanel>
    <TabPanel>
      <History/>
    </TabPanel>
  </TabPanels>
</Tabs></>
  );
}

export default App;
