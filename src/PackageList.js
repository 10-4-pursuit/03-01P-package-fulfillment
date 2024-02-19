import PackageItem from './PackageItem';

function PackageList ({ packages, updatePackage, deletePackage }) {
    return (
        <div>
            {packages.map((pkg) => (
                <PackageItem
                    key={pkg.id}
                    pkg={pkg}
                    updatePackage={updatePackage}
                    deletePackage={deletePackage}
                />
            ))}
        </div>
    );
}

export default PackageList;