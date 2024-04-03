SELECT 
	campaigns.name AS 'Campaign Name',
    COUNT(rounds.id) AS 'Rounds Count',
    COUNT(segments.id) AS 'Segments Count'
FROM campaigns
LEFT JOIN rounds
	ON rounds.campaigns_id = campaigns.id
LEFT JOIN segments
	ON segments.rounds_id = rounds.id
WHERE campaigns.name 
	LIKE 'MyTestCampaign%' 
GROUP BY campaigns.id
ORDER BY COUNT(rounds.id) DESC
LIMIT 10;        