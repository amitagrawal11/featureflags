import FeatureFlagItem from "./FeatureFlagItem";

const FeatureFlagList = () => {
    return (
        <div className="feature-flag-list">
            <h3>Feature Flags</h3>
            <hr />
            <FeatureFlagItem />
            <FeatureFlagItem />
            <FeatureFlagItem />
            <FeatureFlagItem />
            <FeatureFlagItem />
        </div>
    );
}

export default FeatureFlagList;