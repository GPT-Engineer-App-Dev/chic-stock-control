import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs.jsx";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const inventoryData = [
    { id: 1, name: "T-Shirt", category: "Clothing", stock: 120 },
    { id: 2, name: "Jeans", category: "Clothing", stock: 80 },
    { id: 3, name: "Sneakers", category: "Footwear", stock: 50 },
    { id: 4, name: "Jacket", category: "Clothing", stock: 30 },
    { id: 5, name: "Hat", category: "Accessories", stock: 150 },
  ];

  const filteredData = selectedCategory === "all" ? inventoryData : inventoryData.filter((item) => item.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Inventory Management Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Total Items</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{inventoryData.length}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Total Stock</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{inventoryData.reduce((acc, item) => acc + item.stock, 0)}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Low Stock Items</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{inventoryData.filter((item) => item.stock < 50).length}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{[...new Set(inventoryData.map((item) => item.category))].length}</div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="inventory">
              <div className="flex justify-between items-center mb-4">
                <Input placeholder="Search items..." className="w-1/3" />
                <Select onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-1/3">
                    <span>{selectedCategory === "all" ? "All Categories" : selectedCategory}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Clothing">Clothing</SelectItem>
                    <SelectItem value="Footwear">Footwear</SelectItem>
                    <SelectItem value="Accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Stock</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.stock}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="orders">
              <p>Orders content goes here...</p>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setCount(count + 1)}>Click me</Button>
          <div>Count: {count}</div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
