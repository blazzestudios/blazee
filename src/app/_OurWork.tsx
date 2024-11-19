export default function OurWork({ des }: { des?: boolean }) {
  const images: string[] = [
    "https://images.unsplash.com/photo-1720048171596-6a7c81662434?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1686247805255-324dfc4e230a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1727549133759-dd5b1a105ed9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1727460829353-915bc5b76096?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1685736630644-488e8146a3dc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1727117774086-074d19d8df85?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1727452093634-4562a0d9a77d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1721332149274-586f2604884d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1727388396137-f76921c53059?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1726910133626-9b573eca70ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1727200449974-5221973023d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1727042395792-803ce6f1b9bb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1676654935837-68c813d52b44?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
  ];
  // Function to chunk the array into the specified number of columns
  const chunkArray = (arr: string[], numColumns: number): string[][] => {
    const result: string[][] = Array.from({ length: numColumns }, () => []);
    arr.forEach((item, index) => {
      result[index % numColumns].push(item);
    });
    return result;
  };

  // Create 3 columns
  const columns = chunkArray(images, 4);

  return (
    <div
      className={`max-w-[1300px] px-5 ${
        !des && "py-24"
      } flex-col flex mx-auto items-start w-full gap-24`}
    >
      {!des && (
        <div className="flex flex-col gap-[10px] items-start">
          <p className="uppercase text-base font-normal text-white/60 text-start">
            Our Work
          </p>
          <h2 className="text-5xl font-semibold leading-[90%] tracking-tighter max-w-[800px] text-start capitalize">
            {`Our studio excels in various areas, with a strong focus on product design and development.`}
          </h2>
        </div>
      )}

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {columns.map((column, index) => (
            <div key={index} className="grid gap-4 content-start">
              {column.map((img, i) => (
                <div key={i}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={img}
                    alt={`image${i}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
