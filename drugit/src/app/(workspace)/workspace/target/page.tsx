import CollapsibleCategory from "@/components/collapsible-category/collapsible-category";

interface Item {
  name: string;
}

interface Category {
  category: string;
  items: Item[];
}

const data: Category[] = [
  {
    category: "Oncology",
    items: [
      { name: "Lung Cancer" },
      { name: "Breast Cancer" },
      { name: "Colorectal Cancer" },
      { name: "Prostate Cancer" },
      { name: "Pancreatic Cancer" },
      { name: "Ovarian Cancer" },
      { name: "Gastric Cancer" },
      { name: "Liver Cancer" },
      { name: "Renal Cell Carcinoma" },
      { name: "Bladder Cancer" },
      { name: "Melanoma" },
      { name: "Head and Neck Cancer" },
      { name: "Esophageal Cancer" },
      { name: "Glioblastoma" },
      { name: "Leukemia" },
      { name: "Lymphoma " },
      { name: "Multiple Myeloma" },
      { name: "Cervical Cancer" },
      { name: "Endometrial Cancer" },
      { name: "Thyroid Cancer" }
    ]
  }
];


export default function page() {
    return (
      <div>
        {data.map(category => (
        <CollapsibleCategory
          key={category.category} 
          categoryName={category.category} 
          cardNames={category.items.map(item => item.name)} 
          backgroundImage="/encology.jpg"
        />
      ))}
      </div>
    )
  }
  