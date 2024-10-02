const Dashboard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-1">
            <div className="p-2 md:p-10 rounded-tl-2xl bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
                {children}
            </div>
        </div>
    );
};

export default Dashboard;