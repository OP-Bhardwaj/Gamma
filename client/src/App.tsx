import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Partner from "@/pages/Partner";
import Contact from "@/pages/Contact";
import ProductDetail from "@/pages/ProductDetail";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/partner" component={Partner} />
      <Route path="/contact" component={Contact} />
      <Route path="/products/raw-cashew-nuts">
        {() => <ProductDetail productId="raw-cashew-nuts" />}
      </Route>
      <Route path="/products/cashew-kernels">
        {() => <ProductDetail productId="cashew-kernels" />}
      </Route>
      <Route path="/products/coffee">
        {() => <ProductDetail productId="coffee" />}
      </Route>
      <Route path="/products/pulses">
        {() => <ProductDetail productId="pulses" />}
      </Route>
      <Route path="/products/sesame-seeds">
        {() => <ProductDetail productId="sesame-seeds" />}
      </Route>
      <Route path="/products/timber">
        {() => <ProductDetail productId="timber" />}
      </Route>
      <Route path="/products/liquor">
        {() => <ProductDetail productId="liquor" />}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
