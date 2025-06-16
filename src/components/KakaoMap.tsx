import { Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";

function DetailMap() {
    const lat = 35.1022391761897;
    const lng = 128.971640500693;

    const handleMarkerClick = () => {
        const url = `https://map.kakao.com/link/map/${lat},${lng}`;
        window.open(url, "_blank");
    };

    return (
        <div className="map" onClick={handleMarkerClick}>
            <KakaoMap
                center={{ lat, lng }}
                isPanto
                style={{
                    width: "100%",
                    height: "100%",
                }}
                level={2}
            >
                <MapMarker position={{ lat, lng }} onClick={handleMarkerClick} />
            </KakaoMap>
        </div>
    );
}

export default DetailMap;
