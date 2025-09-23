import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { useState } from "react";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const givenHistory = [
    { id: 1, name: "Maria Rodriguez", rating: 5, comment: "Great session!", date: "2024-10-05" },
  ];
  const receivedHistory = [
    { id: 2, name: "Alex Kumar", rating: 4, comment: "Helpful insights.", date: "2024-10-01" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <DashboardSidebar />
        <div className="flex-1 md:ml-0 ml-0">
          <div className="p-6 md:p-8 space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Feedback</h1>
              <p className="text-muted-foreground">Rate your interactions and view your feedback history.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 card-elevated">
                <CardHeader>
                  <CardTitle>Leave Feedback</CardTitle>
                  <CardDescription>Rate from 1–5 stars and add a comment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <button key={i} onClick={() => setRating(i + 1)} className="focus:outline-none">
                        <Star className={`w-6 h-6 ${i < rating ? 'text-warning fill-current' : 'text-muted-foreground'}`} />
                      </button>
                    ))}
                  </div>
                  <Textarea
                    rows={4}
                    placeholder="Share your feedback..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <Button className="btn-professional bg-gradient-primary hover:opacity-90">Submit</Button>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>History</CardTitle>
                  <CardDescription>Given and received feedback</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Given</h4>
                    <div className="space-y-2">
                      {givenHistory.map((f) => (
                        <div key={f.id} className="p-3 rounded-lg border border-border">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">{f.name}</span>
                            <div className="flex items-center space-x-1">
                              {Array.from({ length: f.rating }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-warning fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{f.comment}</p>
                          <p className="text-xs text-muted-foreground">{f.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Received</h4>
                    <div className="space-y-2">
                      {receivedHistory.map((f) => (
                        <div key={f.id} className="p-3 rounded-lg border border-border">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">{f.name}</span>
                            <div className="flex items-center space-x-1">
                              {Array.from({ length: f.rating }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-warning fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{f.comment}</p>
                          <p className="text-xs text-muted-foreground">{f.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;


