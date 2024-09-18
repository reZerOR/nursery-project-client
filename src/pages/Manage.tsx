import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageProducts from "@/components/ManageProducts";
import ManageCategory from "@/components/ManageCategory";
import Heading from "@/components/Heading";
import { containerStyle } from "@/utils/styles";

export default function Manage() {
  return (
    <div className={containerStyle}>
      <Heading text="Manage Everything" />
      <Tabs defaultValue="products" className="font-popins">
        <div className="flex justify-center">
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
        </div>
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
