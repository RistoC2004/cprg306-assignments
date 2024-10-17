import ItemList from './item-list';

export default function Page() {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">Shopping List</h1>
            <ItemList />
        </div>
    );
}
