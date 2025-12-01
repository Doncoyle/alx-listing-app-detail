import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  // Ensure id exists before searching
  if (!id) return <p>Loading...</p>;

  // Convert id to string for comparison
  const property = PROPERTYLISTINGSAMPLE.find(
    (item) => String(item.id) === String(id)
  );

  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
}
