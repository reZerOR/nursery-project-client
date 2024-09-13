import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageProducts from "@/components/ManageProducts";
import ManageCategory from "@/components/ManageCategory";

export default function Manage() {
  return (
    <div className="container mx-auto py-10">
      <Tabs defaultValue="products" className="font-popins">
        <TabsList className="">
          <TabsTrigger
            className="data-[state=active]:bg-primary1 data-[state=active]:text-white"
            value="products"
          >
            Products
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-primary1 data-[state=active]:text-white"
            value="categories"
          >
            Categories
          </TabsTrigger>
        </TabsList>
        <TabsContent value="products">
          <ManageProducts />
        </TabsContent>
        <TabsContent value="categories">
          <ManageCategory />
        </TabsContent>
      </Tabs>
    </div>
  );
}
